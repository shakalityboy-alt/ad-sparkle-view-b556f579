import { useEffect } from "react";

interface AdSenseUnitProps {
  slot?: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

const AdSenseUnit = ({ 
  slot = "XXXXXXXXXX", 
  format = "auto", 
  responsive = true,
  style = { display: 'block' }
}: AdSenseUnitProps) => {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error:", e);
    }
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <ins 
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive.toString()}
      />
    </div>
  );
};

export default AdSenseUnit;
