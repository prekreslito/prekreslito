type UploadedFile = {
  name: string;
  url: string;
};

type Props = {
  files: UploadedFile[];
  onRemove: (index: number) => void;
};

function getIcon(name: string) {
  const ext = name.split(".").pop()?.toLowerCase();

  if (ext === "pdf") return "📄";

  if (["dwg", "dxf", "dwf", "dwfx"].includes(ext || ""))
    return "📐";

  if (["doc", "docx"].includes(ext || ""))
    return "📝";

  if (["xls", "xlsx"].includes(ext || ""))
    return "📊";

  if (["jpg", "jpeg", "png", "webp"].includes(ext || ""))
    return "🖼️";

  if (["zip", "rar", "7z"].includes(ext || ""))
    return "📦";

  return "📁";
}

export default function UploadedFiles({
  files,
  onRemove,
}: Props) {
  if (files.length === 0) return null;

  return (
    <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
      <h3 className="mb-5 text-xl font-bold text-green-400">
        ✅ Nahrané soubory ({files.length}/30)
      </h3>

      <div className="space-y-3">
        {files.map((file, index) => (
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
                onClick={() => onRemove(index)}
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
  );
}