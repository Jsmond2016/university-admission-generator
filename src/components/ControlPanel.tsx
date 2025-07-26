import React from "react";
import { useAdmissionStore } from "../store/admissionStore";
import html2canvas from "html2canvas-pro";

const ControlPanel: React.FC = () => {
  const { setPreviewOpen, setLoading, data } = useAdmissionStore();

  const handlePreview = () => {
    setPreviewOpen(true);
  };

  const handleDownload = async () => {
    setLoading(true);

    // Error: Attempting to parse an unsupported color function "oklch"
    // https://github.com/niklasvh/html2canvas/issues/2700
    try {
      const letterElement = document.getElementById("letter-content");
      if (!letterElement) return;

      const canvas = await html2canvas(letterElement);

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `${data.university}-录取通知书.png`;
      link.click();
    } catch (error) {
      console.error("生成图片失败:", error);
      alert("生成图片失败，请重试！");
    } finally {
      setLoading(false);
    }
  };

  const handleShare = () => {
    alert(
      "录取通知书已复制分享链接！\n（在实际应用中，这里会调用社交媒体分享API）"
    );
  };

  return (
    <div className="control-panel">
      <div className="button-group">
        <button onClick={handlePreview} className="action-btn preview-btn">
          <i className="fas fa-eye mr-2"></i> 预览通知书
        </button>
        <button onClick={handleDownload} className="action-btn download-btn">
          <i className="fas fa-download mr-2"></i> 下载图片
        </button>
        <button onClick={handleShare} className="action-btn share-btn">
          <i className="fas fa-share-alt mr-2"></i> 分享喜报
        </button>
      </div>
    </div>
  );
};

export default ControlPanel;
