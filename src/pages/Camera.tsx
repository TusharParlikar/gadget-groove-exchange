
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Camera as CameraIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Camera = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
      setStream(mediaStream);
      setIsStreaming(true);
    } catch (error) {
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive",
      });
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
      setStream(null);
      setIsStreaming(false);
    }
  };

  const takePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      canvas.getContext("2d")?.drawImage(videoRef.current, 0, 0);
      
      // For demo purposes, we'll just show a success message
      toast({
        title: "Photo Captured",
        description: "Photo has been captured successfully!",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Take a Photo</h1>
          
          <div className="bg-gray-100 rounded-lg p-4 mb-6">
            <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
              {!isStreaming ? (
                <div className="h-full flex items-center justify-center text-white">
                  <CameraIcon className="h-12 w-12" />
                </div>
              ) : (
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
            </div>
            
            <div className="flex gap-4">
              {!isStreaming ? (
                <Button onClick={startCamera} className="flex-1">
                  Start Camera
                </Button>
              ) : (
                <>
                  <Button onClick={takePhoto} className="flex-1">
                    Take Photo
                  </Button>
                  <Button variant="outline" onClick={stopCamera}>
                    Stop Camera
                  </Button>
                </>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Make sure to allow camera permissions when prompted
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Camera;
