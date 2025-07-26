import { create } from 'zustand';

export interface AdmissionData {
  university: string;
  major: string;
  duration: string;
  admissionDate: string;
  studentName: string;
  studentId: string;
  registerDate: string;
  title: string;
  subtitle: string;
  content: string;
  issuer: string;
  issuerName: string;
}

interface AdmissionStore {
  data: AdmissionData;
  isDrawerOpen: boolean;
  isPreviewOpen: boolean;
  isLoading: boolean;
  
  // Actions
  updateData: (updates: Partial<AdmissionData>) => void;
  setDrawerOpen: (open: boolean) => void;
  setPreviewOpen: (open: boolean) => void;
  setLoading: (loading: boolean) => void;
  generateRandomContent: () => void;
  resetToDefault: () => void;
}

const defaultData: AdmissionData = {
  university: "某某大学",
  major: "计算机科学与技术",
  duration: "四年",
  admissionDate: "2023-07-15",
  studentName: "张同学",
  studentId: "20230615001",
  registerDate: "2023年9月1日 - 2023年9月2日",
  title: "录取通知书",
  subtitle: "经招生委员会批准，我校决定录取你入读以下专业学习",
  content: "请你持本通知书于指定日期到我校报到，具体事宜详见《新生入学须知》。我们热烈欢迎你加入某某大学的大家庭，在这里开启人生新的篇章！",
  issuer: "招生办公室",
  issuerName: "某某大学",
};

const universities = [
  "清华大学", "北京大学", "复旦大学", "上海交通大学", "浙江大学",
  "南京大学", "武汉大学", "华中科技大学", "中山大学", "中国人民大学"
];

const majors = [
  "计算机科学与技术", "人工智能", "数据科学与大数据技术", "电子信息工程",
  "金融学", "临床医学", "法学", "建筑学", "软件工程", "自动化"
];

const names = [
  "张明", "李华", "王芳", "刘伟", "陈静", "杨帆", "赵阳", "周婷", "吴雪", "郑浩"
];

export const useAdmissionStore = create<AdmissionStore>((set) => ({
  data: { ...defaultData },
  isDrawerOpen: false,
  isPreviewOpen: false,
  isLoading: false,

  updateData: (updates) =>
    set((state) => ({
      data: { ...state.data, ...updates },
    })),

  setDrawerOpen: (open) => set({ isDrawerOpen: open }),
  setPreviewOpen: (open) => set({ isPreviewOpen: open }),
  setLoading: (loading) => set({ isLoading: loading }),

  generateRandomContent: () =>
    set(() => {
      const randomUniversity = universities[Math.floor(Math.random() * universities.length)];
      const randomMajor = majors[Math.floor(Math.random() * majors.length)];
      const randomName = names[Math.floor(Math.random() * names.length)];
      
      const randomDate = new Date(
        Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
      ).toISOString().split('T')[0];
      
      const startDay = Math.floor(Math.random() * 5) + 1;
      const endDay = startDay + Math.floor(Math.random() * 5);
      
      return {
        data: {
          university: randomUniversity,
          major: randomMajor,
          duration: ["四年", "五年", "三年", "两年"][Math.floor(Math.random() * 4)],
          admissionDate: randomDate,
          studentName: randomName,
          studentId: "2023" + Math.floor(1000 + Math.random() * 9000),
          registerDate: `2023年9月${startDay}日 - 2023年9月${endDay}日`,
          title: "录取通知书",
          subtitle: "经招生委员会批准，我校决定录取你入读以下专业学习",
          content: `恭喜你被我校录取！请你持本通知书于指定日期到我校报到，具体事宜详见《新生入学须知》。我们热烈欢迎你加入${randomUniversity}的大家庭，在这里开启人生新的篇章！`,
          issuer: "招生办公室",
          issuerName: randomUniversity,
        },
      };
    }),

  resetToDefault: () => set({ data: { ...defaultData } }),
}));
