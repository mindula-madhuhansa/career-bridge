import axios from "axios";
import Image from "next/image";
import { useRef, useState } from "react";
import { Loader2Icon, UploadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  name: string;
  url: string;
  setUrl: (url: string) => void;
};

export const ImageUploader = ({ name, url, setUrl }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      alert("No file selected");
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      alert("File size must be less than 3MB");
      return;
    }

    const data = new FormData();
    data.set("file", file);

    try {
      setLoading(true);
      const response = await axios.post("/api/upload", data);

      if (response.status === 200) {
        setUrl(response.data.url);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        className={`flex flex-col items-center justify-center bg-gray-100 size-36 border-2 border-dashed rounded-md ${
          loading && "animate-pulse"
        }`}
      >
        {!url ? (
          !loading ? (
            <>
              <UploadIcon className="size-6 text-muted-foreground" />
              <p className="text-xs text-center mt-2">jpg, png up to 3MB</p>
            </>
          ) : (
            <>
              <Loader2Icon className="size-6 text-muted-foreground animate-spin" />
              <p className="text-xs text-center mt-2">Uploading...</p>
            </>
          )
        ) : (
          <Image
            src={url}
            alt="Uploaded image"
            width={512}
            height={512}
            className="size-32 object-cover"
          />
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        onChange={handleUpload}
        accept="image/jpeg, image/png"
        className="hidden"
      />
      <input type="hidden" name={name} value={url} />
      <Button
        type="button"
        variant="secondary"
        onClick={() => inputRef.current?.click()}
        className="mt-2 w-36"
      >
        Upload
      </Button>
    </>
  );
};
