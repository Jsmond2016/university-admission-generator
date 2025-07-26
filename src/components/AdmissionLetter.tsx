import React from "react";
import { useAdmissionStore } from "../store/admissionStore";
import { formatDate, formatContent } from "../utils/dateUtils";

const AdmissionLetter: React.FC = () => {
  const { data } = useAdmissionStore();

  return (
    <div className="letter-container">
      <div className="header-logo">
        <div className="ribbon">录取通知书</div>
        <h1 id="university-name" className="text-3xl font-bold mt-6">
          {data.university}
        </h1>
        <p className="text-blue-200 mt-2">OFFICIAL ADMISSION LETTER</p>
      </div>

      <div className="admission-letter" id="letter-content">
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
          <h2
            id="letter-title"
            className="text-4xl font-bold text-blue-900 mb-6"
          >
            {data.title}
          </h2>
          <p id="letter-subtitle" className="text-xl text-gray-700">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-gray-600 mb-1">考生姓名</p>
            <p id="student-name" className="text-2xl font-bold text-blue-900">
              {data.studentName}
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">考生号</p>
            <p id="student-id" className="text-2xl font-bold text-blue-900">
              {data.studentId}
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">录取专业</p>
            <p id="major-name" className="text-2xl font-bold text-blue-900">
              {data.major}
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">学制时间</p>
            <p id="duration" className="text-2xl font-bold text-blue-900">
              {data.duration}
            </p>
          </div>
        </div>

        <div className="mb-16">
          <p className="text-gray-600 mb-1">报到时间</p>
          <p id="register-date" className="text-xl font-bold text-blue-900">
            {data.registerDate}
          </p>
        </div>

        <div
          id="letter-content-text"
          className="text-lg text-gray-700 leading-relaxed mb-16"
        >
          {formatContent(data.content).map((line, index) => (
            <p key={index} className="mb-4">
              {line}
            </p>
          ))}
        </div>

        <div className="flex justify-between items-end">
          <div className="signature">
            <p id="admission-date" className="text-gray-600 mb-1">
              {formatDate(data.admissionDate)}
            </p>
            <p className="text-gray-600">签发日期</p>
          </div>

          <div className="text-right">
            <div id="issuer-name" className="mb-2 text-gray-600">
              {data.issuerName}
            </div>
            <div id="issuer" className="text-lg font-bold text-blue-900">
              {data.issuer}
            </div>
          </div>
        </div>

        <div className="letter-disclaimer">
          本通知书为模拟生成，仅供娱乐，不具有法律效力
        </div>
      </div>
    </div>
  );
};

export default AdmissionLetter;
