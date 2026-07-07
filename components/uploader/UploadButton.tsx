"use client";

import { useRef, useState } from "react";
import UploadedFiles from "./UploadedFiles";
import UploadProgress from "./UploadProgress";

type Props = {
  onUploaded?: (urls: string[]) => void;
};

type UploadedFile = {
  name: string;
  url: string;
};

const MAX_FILE_SIZE = 50 * 1024 * 1024;
const MAX_FILES = 30;

export default function UploadButton({
  onUploaded,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<
    UploadedFile[]
  >([]);
  const [dragActive, setDragActive] =
    useState(false);
  const [errorMessage, setErrorMessage] =
    useState("");

  async function uploadFiles(
    fileList: FileList
  ) {
    setErrorMessage("");

    const selectedFiles = Array.from(fileList);

    if (
      uploadedFiles.length +
        selectedFiles.length >
      MAX_FILES
    ) {
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
    setProgress(0);

    const formData = new FormData();

    const fileNames = selectedFiles.map(
      (file) => file.name
    );

    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round(
          (event.loaded / event.total) * 100
        );

        setProgress(percent);
      }
    };

    xhr.onload = () => {
      setUploading(false);

      if (xhr.status !== 200) {
        setErrorMessage(
          "Chyba při nahrávání."
        );
        return;
      }

      const data = JSON.parse(
        xhr.responseText
      );

      const uploaded: UploadedFile[] =
        data.files.map(
          (
            url: string,
            index: number
          ) => ({
            name: fileNames[index],
            url,
          })
        );

      setUploadedFiles((prev) => {
        const updated = [
          ...prev,
          ...uploaded,
        ];

        onUploaded?.(
          updated.map(
            (file) => file.url
          )
        );

        return updated;
      });

      setProgress(100);

      setTimeout(() => {
        setUploading(false);
      }, 500);
    };
        xhr.onerror = () => {
      setUploading(false);

      setErrorMessage(
        "Chyba při nahrávání."
      );
    };

    xhr.open(
      "POST",
      "/api/upload"
    );

    xhr.send(formData);
  }

  function removeFile(index: number) {
    const updated =
      uploadedFiles.filter(
        (_, i) => i !== index
      );

    setUploadedFiles(updated);

    onUploaded?.(
      updated.map(
        (file) => file.url
      )
    );
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

    if (!e.dataTransfer.files.length)
      return;

    uploadFiles(
      e.dataTransfer.files
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
            Maximálně 30 souborů • 10 MB na soubor
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

      <UploadProgress
        uploading={uploading}
        progress={progress}
      />

      <UploadedFiles
        files={uploadedFiles}
        onRemove={removeFile}
      />

    </div>
  );
}