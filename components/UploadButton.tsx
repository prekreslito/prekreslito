"use client";

import { useRef, useState } from "react";

type Props = {
  onUploaded?: (urls: string[]) => void;
};

type UploadedFile = {
  name: string;
  url: string;
};

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50 MB
const MAX_FILES = 30;

export default function FileUploader({ onUploaded }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function uploadFiles(fileList: FileList) {
    setErrorMessage("");

    const selectedFiles = Array.from(fileList);

    if (uploadedFiles.length + selectedFiles.length > MAX_FILES) {
      setErrorMessage(
        `Můžete nahrát maximálně ${MAX_FILES} souborů.`
      );
      return;
    }

    for (const file of selectedFiles) {
      if (file.size > MAX_FILE_SIZE) {
        setErrorMessage(
          `Soubor "${file.name}" je větší než 50 MB.`
        );
        return;
      }
    }

    setUploading(true);

    const formData = new FormData();

    const fileNames = selectedFiles.map((file) => file.name);

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    setUploading(false);

    if (!res.ok) {
      setErrorMessage("Chyba při nahrávání souborů.");
      return;
    }

    const data = await res.json();

    const uploaded: UploadedFile[] = data.files.map(
      (url: string, index: number) => ({
        name: fileNames[index],
        url,
      })
    );

    setUploadedFiles((prev) => {
      const updated = [...prev, ...uploaded];

      onUploaded?.(
        updated.map((file) => file.url)
      );

      return updated;
    });
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!e.target.files?.length) return;

    uploadFiles(e.target.files);

    e.target.value = "";
  }

  function handleDrop(
    e: React.DragEvent<HTMLDivElement>
  ) {
    e.preventDefault();
    setDragActive(false);

    if (!e.dataTransfer.files.length) return;

    uploadFiles(e.dataTransfer.files);
  }

  function getIcon(name: string) {
    const ext = name.split(".").pop()?.toLowerCase();

    if (ext === "pdf") return "📄";

    if (
      ext === "dwg" ||
      ext === "dxf" ||
      ext === "dwf" ||
      ext === "dwfx"
    )
      return "📐";

    if (ext === "doc" || ext === "docx")
      return "📝";

    if (ext === "xls" || ext === "xlsx")
      return "📊";

    if (
      ["jpg", "jpeg", "png", "webp"].includes(
        ext || ""
      )
    )
      return "🖼️";

    if (
      ["zip", "rar", "7z"].includes(
        ext || ""
      )
    )
      return "📦";

    return "📁";
  }

  function removeFile(index: number) {
    const updated = uploadedFiles.filter(
      (_, i) => i !== index
    );

    setUploadedFiles(updated);

    onUploaded?.(
      updated.map((file) => file.url)
    );
  }

  return (
    <div className="w-full">

      <input
        ref={inputRef}
        type="file"
        multiple
        accept=".pdf,.dwg,.dxf,.dwf,.dwfx,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.webp,.zip,.rar,.7z"
        onChange={handleInputChange}
        className="hidden"
      />

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
        className={`cursor-pointer rounded-3xl border-2 border-dashed p-10 text-center transition-all duration-300 ${
          dragActive
            ? "border-cyan-400 bg-cyan-500/15 scale-[1.02]"
            : "border-cyan-500/30 bg-white/5 hover:border-cyan-400 hover:bg-cyan-500/10"
        }`}
      >
        <div className="mb-5 text-6xl">
          📂
        </div>

        <h3 className="text-2xl font-bold">
          Přetáhněte soubory sem
        </h3>

        <p className="mt-3 text-slate-400">
          nebo klikněte pro jejich výběr
        </p>

        <div className="mt-6 inline-block rounded-xl bg-cyan-500 px-6 py-3 font-bold transition hover:bg-cyan-400">
          Vybrat soubory
        </div>

        <p className="mt-6 text-sm text-slate-500">
          PDF • DWG • DXF • DOC • DOCX • XLS • XLSX • JPG • PNG • WEBP • ZIP • RAR • 7Z
          <br />
          <span className="text-xs">
            Maximálně 30 souborů • 50 MB na soubor
          </span>
        </p>
      </div>

      {errorMessage && (
        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center">
          <p className="font-semibold text-red-400">
            ❌ {errorMessage}
          </p>
        </div>
      )}

      {uploading && (
        <div className="mt-6 rounded-xl bg-cyan-500/10 p-4 text-center">
          <p className="font-semibold text-cyan-300">
            ⏳ Nahrávám soubory...
          </p>
        </div>
      )}
            {uploadedFiles.length > 0 && (
        <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
          <h3 className="mb-5 text-xl font-bold text-green-400">
            ✅ Nahrané soubory ({uploadedFiles.length}/{MAX_FILES})
          </h3>

          <div className="space-y-3">
            {uploadedFiles.map((file, index) => (
              <div
                key={`${file.url}-${index}`}
                className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-4 overflow-hidden">
                  <span className="text-3xl">
                    {getIcon(file.name)}
                  </span>

                  <div className="overflow-hidden">
                    <p className="truncate font-medium">
                      {file.name}
                    </p>

                    <a
                      href={file.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:underline"
                    >
                      Otevřít soubor
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-400">
                    ✓ Nahráno
                  </span>

                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="rounded-lg p-2 text-xl transition hover:bg-red-500/20 hover:scale-110"
                    title="Odebrat soubor"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}