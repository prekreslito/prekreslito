import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("files") as File[];

    if (files.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Nebyl vybrán žádný soubor.",
        },
        {
          status: 400,
        }
      );
    }

    // Výpis bucketů pro kontrolu
    const buckets = await supabase.storage.listBuckets();
    console.log("========== BUCKETS ==========");
    console.dir(buckets, { depth: null });
    console.log("=============================");

    const uploadedFiles: string[] = [];

    for (const file of files) {
      // Bezpečný název souboru
      const safeName = file.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9._-]/g, "_");

      const fileName = `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}-${safeName}`;

      console.log("Nahrávám:", fileName);

      const { error } = await supabase.storage
        .from("projekty")
        .upload(fileName, file);

      if (error) {
        console.error("SUPABASE STORAGE ERROR:");
        console.error(error);

        return NextResponse.json(
          {
            success: false,
            error: error.message,
          },
          {
            status: 500,
          }
        );
      }

      const { data } = supabase.storage
        .from("projekty")
        .getPublicUrl(fileName);

      console.log("PUBLIC URL:", data.publicUrl);

      uploadedFiles.push(data.publicUrl);
    }

    return NextResponse.json({
      success: true,
      files: uploadedFiles,
    });
  } catch (err) {
    console.error("SERVER ERROR:");
    console.error(err);

    return NextResponse.json(
      {
        success: false,
        error: "Chyba serveru.",
      },
      {
        status: 500,
      }
    );
  }
}