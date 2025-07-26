$(document).ready(function () {
  // 数据模型 - 单一对象
  const letterData = {
    university: "某某大学",
    major: "计算机科学与技术",
    duration: "四年",
    admissionDate: "2023-07-15",
    studentName: "张同学",
    studentId: "20230615001",
    registerDate: "2023年9月1日 - 2023年9月2日",
    title: "录取通知书",
    subtitle: "经招生委员会批准，我校决定录取你入读以下专业学习",
    content:
      "请你持本通知书于指定日期到我校报到，具体事宜详见《新生入学须知》。我们热烈欢迎你加入某某大学的大家庭，在这里开启人生新的篇章！",
    issuer: "招生办公室",
    issuerName: "某某大学",
  };

  // 初始化表单
  function initForm() {
    $("#input-university").val(letterData.university);
    $("#input-major").val(letterData.major);
    $("#input-duration").val(letterData.duration);
    $("#input-date").val(letterData.admissionDate);
    $("#input-student-name").val(letterData.studentName);
    $("#input-student-id").val(letterData.studentId);
    $("#input-register-date").val(letterData.registerDate);
    $("#input-title").val(letterData.title);
    $("#input-subtitle").val(letterData.subtitle);
    $("#input-content").val(letterData.content);
    $("#input-issuer").val(letterData.issuer);
    $("#input-issuer-name").val(letterData.issuerName);
  }

  // 从表单更新数据模型
  function updateDataModel() {
    letterData.university = $("#input-university").val();
    letterData.major = $("#input-major").val();
    letterData.duration = $("#input-duration").val();
    letterData.admissionDate = $("#input-date").val();
    letterData.studentName = $("#input-student-name").val();
    letterData.studentId = $("#input-student-id").val();
    letterData.registerDate = $("#input-register-date").val();
    letterData.title = $("#input-title").val();
    letterData.subtitle = $("#input-subtitle").val();
    letterData.content = $("#input-content").val();
    letterData.issuer = $("#input-issuer").val();
    letterData.issuerName = $("#input-issuer-name").val();
  }

  // 更新日期显示格式
  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
  }

  // 渲染通知书
  function renderLetter() {
    $("#university-name").text(letterData.university);
    $("#major-name").text(letterData.major);
    $("#duration").text(letterData.duration);
    $("#admission-date").text(formatDate(letterData.admissionDate));
    $("#student-name").text(letterData.studentName);
    $("#student-id").text(letterData.studentId);
    $("#register-date").text(letterData.registerDate);
    $("#letter-title").text(letterData.title);
    $("#letter-subtitle").text(letterData.subtitle);

    // 处理内容换行
    const contentLines = letterData.content.split("\n");
    let contentHTML = "";
    contentLines.forEach((line) => {
      if (line.trim() !== "") {
        contentHTML += `<p class="mb-4">${line}</p>`;
      }
    });
    $("#letter-content-text").html(contentHTML);

    $("#issuer").text(letterData.issuer);
    $("#issuer-name").text(letterData.issuerName);
  }

  // 生成随机内容
  function generateRandomContent() {
    const universities = [
      "清华大学",
      "北京大学",
      "复旦大学",
      "上海交通大学",
      "浙江大学",
      "南京大学",
      "武汉大学",
      "华中科技大学",
    ];
    const majors = [
      "计算机科学与技术",
      "人工智能",
      "数据科学与大数据技术",
      "电子信息工程",
      "金融学",
      "临床医学",
      "法学",
      "建筑学",
    ];
    const names = [
      "张明",
      "李华",
      "王芳",
      "刘伟",
      "陈静",
      "杨帆",
      "赵阳",
      "周婷",
    ];

    // 更新数据模型
    letterData.university =
      universities[Math.floor(Math.random() * universities.length)];
    letterData.major = majors[Math.floor(Math.random() * majors.length)];
    letterData.duration = ["四年", "五年", "三年", "两年"][
      Math.floor(Math.random() * 4)
    ];
    letterData.admissionDate = new Date(
      Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split("T")[0];
    letterData.studentName =
      names[Math.floor(Math.random() * names.length)];
    letterData.studentId =
      "2023" + Math.floor(1000 + Math.random() * 9000);
    letterData.registerDate =
      "2023年9月" +
      (Math.floor(Math.random() * 5) + 1) +
      "日 - 2023年9月" +
      (Math.floor(Math.random() * 5) + 6) +
      "日";
    letterData.content =
      "恭喜你被我校录取！请你持本通知书于指定日期到我校报到，具体事宜详见《新生入学须知》。我们热烈欢迎你加入" +
      letterData.university +
      "的大家庭，在这里开启人生新的篇章！";
    letterData.issuerName = letterData.university;

    // 更新表单
    initForm();

    // 渲染通知书
    renderLetter();
  }

  // 打开抽屉
  function openDrawer() {
    $("#settings-drawer").addClass("open");
    $("#drawer-overlay").addClass("active");
    $("body").css("overflow", "hidden");
  }

  // 关闭抽屉
  function closeDrawer() {
    $("#settings-drawer").removeClass("open");
    $("#drawer-overlay").removeClass("active");
    $("body").css("overflow", "auto");
  }

  // 初始化
  initForm();
  renderLetter();

  // 打开设置抽屉按钮
  $("#open-settings-btn").click(openDrawer);

  // 关闭抽屉按钮
  $("#close-drawer, #drawer-overlay, #cancel-btn").click(closeDrawer);

  // 更新通知书按钮（在抽屉中）
  $("#update-btn").click(function () {
    updateDataModel();
    renderLetter();
    closeDrawer();
  });

  // 预览通知书按钮
  $("#preview-btn").click(function () {
    updateDataModel();
    renderLetter();

    // 克隆整个通知书卡片（包括顶部）
    const letterClone = $(".letter-container").clone();
    // 移除控制面板
    letterClone.find(".control-panel").remove();
    // 确保免责声明显示
    letterClone.find(".letter-disclaimer").show();

    $("#preview-container").html(letterClone);
    $("#preview-modal").fadeIn();
  });

  // 关闭预览
  $("#close-preview").click(function () {
    $("#preview-modal").fadeOut();
  });

  // 下载图片功能
  function downloadLetter() {
    // 克隆通知书节点
    const letterClone = $(".letter-container").clone();
    // 移除控制面板
    letterClone.find(".control-panel").remove();
    // 确保免责声明显示
    letterClone.find(".letter-disclaimer").show();

    // 添加到body中（移出屏幕外）
    letterClone
      .css({
        position: "absolute",
        left: "-9999px",
        top: 0,
      })
      .appendTo("body");

    $("#loading").show();

    html2canvas(letterClone[0], {
      scale: 2,
      backgroundColor: null,
    })
      .then((canvas) => {
        const image = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = image;
        link.download = letterData.university + "-录取通知书.png";
        link.click();

        // 移除克隆节点
        letterClone.remove();
        $("#loading").hide();
      })
      .catch((err) => {
        console.error("生成图片失败:", err);
        alert("生成图片失败，请重试！");
        letterClone.remove();
        $("#loading").hide();
      });
  }

  // 下载按钮
  $("#download-btn, #download-from-preview").click(function () {
    downloadLetter();
  });

  // 分享按钮
  $("#share-btn").click(function () {
    updateDataModel();
    renderLetter();
    setTimeout(() => {
      alert(
        "录取通知书已复制分享链接！\n（在实际应用中，这里会调用社交媒体分享API）"
      );
    }, 500);
  });

  // 随机内容按钮
  $("#random-btn").click(function () {
    generateRandomContent();
  });
});