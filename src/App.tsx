import { useAdmissionStore } from "./store/admissionStore";
import AdmissionLetter from "./components/AdmissionLetter";
import ControlPanel from "./components/ControlPanel";
import SettingsDrawer from "./components/SettingsDrawer";
import PreviewModal from "./components/PreviewModal";
import Loading from "./components/Loading";
import "./App.css";

function App() {
  const { setDrawerOpen } = useAdmissionStore();

  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>大学录取通知书生成器</h1>
          <p>完全自定义你的录取通知书，生成一份精美的电子版录取通知书</p>
        </div>

        <AdmissionLetter />
        <ControlPanel />

        <div className="disclaimer mt-[24px] text-[12px] text-[#718096] text-center p-[20px] bg-[#f8f9fa] rounded-[12px] max-w-[800px] mx-auto my-0 border-[1px] border-solid border-[#e2e8f0] leading-[1.6]">
          <p>
            免责声明：本工具生成的录取通知书仅供娱乐和模拟使用，不具备任何法律效力。实际录取通知书以各大学官方发放的文件为准。
          </p>
          <p>
            © 2025 大学录取通知书生成器 - 本工具由前端技术开发，仅用于展示目的
          </p>
          <div className="developer-info mt-[16px] pt-[16px] border-t-[1px] border-[#e2e8f0]">
            <p className="font-bold text-[#4a5568] mb-[8px]">开发者信息</p>
            <p>
              <i className="fas fa-code mr-[4px]"></i>
              开发者：
              <a
                href="https://github.com/Jsmond2016"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3182ce] hover:text-[#2c5aa0] underline"
              >
                Jsmond2016
              </a>
            </p>
            <p>
              <i className="fas fa-github mr-[4px]"></i>
              开源项目：
              <a
                href="https://github.com/Jsmond2016/university-admission-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3182ce] hover:text-[#2c5aa0] underline"
              >
                GitHub仓库
              </a>
            </p>
          </div>
        </div>
      </div>

      <button className="open-settings-btn" onClick={() => setDrawerOpen(true)}>
        <i className="fas fa-cog text-2xl"></i>
        <div className="notification-badge">!</div>
      </button>

      <SettingsDrawer />
      <PreviewModal />
      <Loading />
    </div>
  );
}

export default App;
