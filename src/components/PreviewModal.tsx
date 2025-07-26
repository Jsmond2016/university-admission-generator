import React from "react";
import { useAdmissionStore } from "../store/admissionStore";
import html2canvas from "html2canvas";

const PreviewModal: React.FC = () => {
  const { isPreviewOpen, setPreviewOpen, setLoading, data } =
    useAdmissionStore();

  const handleClose = () => {
    setPreviewOpen(false);
  };

  const handleDownload = async () => {
    setLoading(true);

    try {
      const letterElement = document.getElementById("preview-letter");
      if (!letterElement) return;

      const canvas = await html2canvas(letterElement, {
        scale: 2,
        backgroundColor: null,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = `${data.university}-录取通知书.png`;
      link.click();

      setPreviewOpen(false);
    } catch (error) {
      console.error("生成图片失败:", error);
      alert("生成图片失败，请重试！");
    } finally {
      setLoading(false);
    }
  };

  if (!isPreviewOpen) return null;

  return (
    <div className="preview-modal" style={{ display: "flex" }}>
      <div className="preview-content">
        <div className="preview-title">录取通知书预览</div>
        <div
          id="preview-container"
          className="bg-white p-4 rounded-lg w-full max-w-4xl"
        >
          <div id="preview-letter">
            <div className="letter-container">
              <div className="header-logo">
                <div className="ribbon">录取通知书</div>
                <h1 className="text-3xl font-bold mt-6">{data.university}</h1>
                <p className="text-blue-200 mt-2">OFFICIAL ADMISSION LETTER</p>
              </div>

              <div className="admission-letter">
                <div className="envelope">
                  <i className="fas fa-envelope-open"></i>
                </div>

                <div className="stamp">
                  <div className="text-center">
                    <div>邮</div>
                    <div>票</div>
                  </div>
                </div>

                <div className="gold-border"></div>

                <div className="university-seal">
                  <div className="text-center text-blue-700 font-bold">
                    <div>校</div>
                    <div>徽</div>
                  </div>
                </div>

                <div className="text-center mt-10 mb-16">
                  <h2 className="text-4xl font-bold text-blue-900 mb-6">
                    {data.title}
                  </h2>
                  <p className="text-xl text-gray-700">{data.subtitle}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                  <div>
                    <p className="text-gray-600 mb-1">考生姓名</p>
                    <p className="text-2xl font-bold text-blue-900">
                      {data.studentName}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">考生号</p>
                    <p className="text-2xl font-bold text-blue-900">
                      {data.studentId}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">录取专业</p>
                    <p className="text-2xl font-bold text-blue-900">
                      {data.major}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-1">学制时间</p>
                    <p className="text-2xl font-bold text-blue-900">
                      {data.duration}
                    </p>
                  </div>
                </div>

                <div className="mb-16">
                  <p className="text-gray-600 mb-1">报到时间</p>
                  <p className="text-xl font-bold text-blue-900">
                    {data.registerDate}
                  </p>
                </div>

                <div className="text-lg text-gray-700 leading-relaxed mb-16">
                  {data.content
                    .split("\n")
                    .filter((line) => line.trim() !== "")
                    .map((line, index) => (
                      <p key={index} className="mb-4">
                        {line}
                      </p>
                    ))}
                </div>

                <div className="flex justify-between items-end">
                  <div className="signature">
                    <p className="text-gray-600 mb-1">
                      {new Date(data.admissionDate).toLocaleDateString(
                        "zh-CN",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                    <p className="text-gray-600">签发日期</p>
                  </div>

                  <div className="text-right">
                    <div className="mb-2 text-gray-600">{data.issuerName}</div>
                    <div className="text-lg font-bold text-blue-900">
                      {data.issuer}
                    </div>
                  </div>
                </div>

                <div className="letter-disclaimer">
                  本通知书为模拟生成，仅供娱乐，不具有法律效力
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="preview-buttons">
          <button onClick={handleClose} className="preview-btn preview-close">
            <i className="fas fa-times mr-2"></i>关闭预览
          </button>
          <button
            onClick={handleDownload}
            className="preview-btn preview-download"
          >
            <i className="fas fa-download mr-2"></i>下载图片
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
