import React from "react";
import { useAdmissionStore } from "../store/admissionStore";

const SettingsDrawer: React.FC = () => {
  const {
    data,
    isDrawerOpen,
    setDrawerOpen,
    updateData,
    generateRandomContent,
  } = useAdmissionStore();

  const handleInputChange = (field: keyof typeof data, value: string) => {
    updateData({ [field]: value });
  };

  const handleUpdate = () => {
    setDrawerOpen(false);
  };

  if (!isDrawerOpen) return null;

  return (
    <>
      <div
        className="drawer-overlay active"
        onClick={() => setDrawerOpen(false)}
      />

      <div className="settings-drawer open">
        <div className="drawer-header">
          <h2 className="text-2xl font-bold text-blue-900">设置通知书信息</h2>
          <button
            onClick={() => setDrawerOpen(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <div className="drawer-content">
          <div className="form-section">
            <h3>基本信息</h3>
            <div className="input-group">
              <label htmlFor="input-university">大学名称</label>
              <input
                type="text"
                id="input-university"
                placeholder="输入大学名称"
                value={data.university}
                onChange={(e) =>
                  handleInputChange("university", e.target.value)
                }
              />
            </div>
            <div className="input-group">
              <label htmlFor="input-major">录取专业</label>
              <input
                type="text"
                id="input-major"
                placeholder="输入录取专业"
                value={data.major}
                onChange={(e) => handleInputChange("major", e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="input-duration">学制时间</label>
              <select
                id="input-duration"
                value={data.duration}
                onChange={(e) => handleInputChange("duration", e.target.value)}
              >
                <option value="四年">四年制</option>
                <option value="五年">五年制</option>
                <option value="三年">三年制</option>
                <option value="两年">两年制</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="input-date">录取日期</label>
              <input
                type="date"
                id="input-date"
                value={data.admissionDate}
                onChange={(e) =>
                  handleInputChange("admissionDate", e.target.value)
                }
              />
            </div>
          </div>

          <div className="form-section">
            <h3>考生信息</h3>
            <div className="input-group">
              <label htmlFor="input-student-name">考生姓名</label>
              <input
                type="text"
                id="input-student-name"
                placeholder="输入考生姓名"
                value={data.studentName}
                onChange={(e) =>
                  handleInputChange("studentName", e.target.value)
                }
              />
            </div>
            <div className="input-group">
              <label htmlFor="input-student-id">考生号</label>
              <input
                type="text"
                id="input-student-id"
                placeholder="输入考生号"
                value={data.studentId}
                onChange={(e) => handleInputChange("studentId", e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="input-register-date">报到时间</label>
              <input
                type="text"
                id="input-register-date"
                placeholder="输入报到时间"
                value={data.registerDate}
                onChange={(e) =>
                  handleInputChange("registerDate", e.target.value)
                }
              />
            </div>
          </div>

          <div className="form-section">
            <h3>通知内容</h3>
            <div className="input-group">
              <label htmlFor="input-title">标题</label>
              <input
                type="text"
                id="input-title"
                placeholder="输入标题"
                value={data.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="input-subtitle">副标题</label>
              <input
                type="text"
                id="input-subtitle"
                placeholder="输入副标题"
                value={data.subtitle}
                onChange={(e) => handleInputChange("subtitle", e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="input-content">通知正文</label>
              <textarea
                id="input-content"
                rows={3}
                placeholder="输入通知内容"
                value={data.content}
                onChange={(e) => handleInputChange("content", e.target.value)}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>落款信息</h3>
            <div className="input-group">
              <label htmlFor="input-issuer">签发单位</label>
              <input
                type="text"
                id="input-issuer"
                placeholder="输入签发单位"
                value={data.issuer}
                onChange={(e) => handleInputChange("issuer", e.target.value)}
              />
            </div>
            <div className="input-group">
              <label htmlFor="input-issuer-name">单位名称</label>
              <input
                type="text"
                id="input-issuer-name"
                placeholder="输入单位名称"
                value={data.issuerName}
                onChange={(e) =>
                  handleInputChange("issuerName", e.target.value)
                }
              />
            </div>
          </div>

          <div className="random-btn-container">
            <button onClick={generateRandomContent} className="random-btn">
              <i className="fas fa-random mr-2"></i> 一键随机内容
            </button>
          </div>
        </div>

        <div className="drawer-footer">
          <button
            onClick={() => setDrawerOpen(false)}
            className="preview-btn"
            style={{ flex: 1 }}
          >
            <i className="fas fa-times mr-2"></i> 取消
          </button>
          <button
            onClick={handleUpdate}
            className="gold-button"
            style={{ flex: 1, padding: 16 }}
          >
            <i className="fas fa-sync-alt mr-2"></i> 更新通知书
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsDrawer;
