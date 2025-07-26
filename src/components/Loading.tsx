import React from "react";
import { useAdmissionStore } from "../store/admissionStore";

const Loading: React.FC = () => {
  const { isLoading } = useAdmissionStore();

  if (!isLoading) return null;

  return (
    <div className="loading" style={{ display: "flex" }}>
      <div className="spinner"></div>
      <div className="loading-text">正在生成通知书，请稍候...</div>
    </div>
  );
};

export default Loading;
