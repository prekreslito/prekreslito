type Props = {
  uploading: boolean;
  progress: number;
};

export default function UploadProgress({
  uploading,
  progress,
}: Props) {
  if (!uploading) return null;

  return (
    <div className="mt-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

      <div className="mb-3 flex items-center justify-between">

        <span className="font-semibold text-cyan-300">
          ⏳ Nahrávám soubory...
        </span>

        <span className="font-bold text-cyan-300">
          {progress}%
        </span>

      </div>

      <div className="h-4 overflow-hidden rounded-full bg-white/10">

        <div
          className="h-full rounded-full bg-cyan-400 transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <p className="mt-3 text-center text-sm text-slate-400">
        Prosím nechte stránku otevřenou během nahrávání.
      </p>

    </div>
  );
}