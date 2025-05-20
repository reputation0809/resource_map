// 這段程式碼是用來控制網頁上不同頁面的顯示與隱藏，實現按鈕點擊後的頁面切換功能。
// 每個按鈕都有一個事件監聽器（addEventListener），當按鈕被點擊時，會執行特定的動作：
// 1. e.preventDefault()：防止按鈕的預設行為（例如表單提交或頁面跳轉）。
// 2. document.getElementById("某頁面ID").style.display = "block"：將指定的頁面顯示出來。
// 3. document.getElementById("某頁面ID").style.display = "none"：將指定的頁面隱藏起來。
// 每個按鈕的功能都是讓某個頁面顯示，同時隱藏另一個頁面，以實現頁面間的導航效果。
// 例如：點擊「進入」按鈕會隱藏首頁並顯示選擇頁面，點擊「返回」按鈕則會回到上一個頁面。

document.getElementById("enterButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("homepage").style.display = "none";
    document.getElementById("choose_page").style.display = "block";
  });
  
  document.getElementById("backButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("homepage").style.display = "block";
    document.getElementById("choose_page").style.display = "none";
  });
  
  document.getElementById("backButton_page3").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("choose_page").style.display = "block";
    document.getElementById("govern_page").style.display = "none";
  });
  
  document.getElementById("promotionButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("promotion_page").style.display = "block";
    document.getElementById("choose_page").style.display = "none";
  });
  
  document.getElementById("backButton_promotion_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("choose_page").style.display = "block";
    document.getElementById("promotion_page").style.display = "none";
  });
  
  document.getElementById("backButton_page3_1").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("govern_page").style.display = "block";
    document.getElementById("care_page").style.display = "none";
  });
  
  document.getElementById("governButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("govern_page").style.display = "block";
    document.getElementById("choose_page").style.display = "none";
  });
  
  document.getElementById("moneyButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("money_page").style.display = "block";
    document.getElementById("choose_page").style.display = "none";
  });
  
  document.getElementById("communityButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("community_page").style.display = "block";
    document.getElementById("choose_page").style.display = "none";
  });
  
  document.getElementById("careButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("care_page").style.display = "block";
    document.getElementById("govern_page").style.display = "none";
  });
  
  document.getElementById("taitungButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("county_page").style.display = "block";
    document.getElementById("govern_page").style.display = "none";
  });
  
  document.getElementById("backButton_page3_3").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("govern_page").style.display = "block";
    document.getElementById("county_page").style.display = "none";
  });
  
  document.getElementById("backButton_page4").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("choose_page").style.display = "block";
    document.getElementById("money_page").style.display = "none";
  });
  
  document.getElementById("backButton_page5").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("choose_page").style.display = "block";
    document.getElementById("community_page").style.display = "none";
  });
  
  document.getElementById("affairButton").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("affair_homepage").style.display = "block";
    document.getElementById("choose_page").style.display = "none";
    document.getElementById("govern_page").style.display = "none";
  });
  
  document.getElementById("backButton_affair_homepage").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("choose_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("honor_identity").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("honor_identity_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_honor_identity_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("honor_identity_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("home").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("home_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_home_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("home_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("study").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("study_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_study_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("study_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("job").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("job_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_job_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("job_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("train").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("train_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_train_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("train_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("medical").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("medical_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_medical_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("medical_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("care").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("care_page2").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_care_page2").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("care_page2").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("retire_money").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("retire_money_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_retire_money_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("retire_money_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("identity").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("identity_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_identity_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("identity_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("funeral").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("funeral_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_funeral_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("funeral_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("crucial").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("crucial_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_crucial_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("crucial_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("imergency").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("imergency_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_imergency_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("imergency_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("season").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("season_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_season_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("season_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("severe_nature").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("severe_nature_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_severe_nature_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("severe_nature_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("funeral_care").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("funeral_care_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_funeral_care_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("funeral_care_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("school").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("school_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_school_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("school_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("school_award").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("school_award_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_school_award_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("school_award_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("elite").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("elite_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_elite_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("elite_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("lunch").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("lunch_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_lunch_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("lunch_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("temple").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("temple_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_temple_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("temple_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("dependent_law").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("dependent_law_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_dependent_law_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("dependent_law_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("dependent_foundation").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("dependent_foundation_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_dependent_foundation_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("dependent_foundation_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("medical_care").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("medical_care_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_medical_care_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("medical_care_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("dependent_medical").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("dependent_medical_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_dependent_medical_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("dependent_medical_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("dependent_work_train").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("dependent_work_train_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_dependent_work_train_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("dependent_work_train_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  document.getElementById("dependent_other").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("dependent_other_page").style.display = "block";
    document.getElementById("affair_homepage").style.display = "none";
  });
  
  document.getElementById("backButton_dependent_other_page").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("dependent_other_page").style.display = "none";
    document.getElementById("affair_homepage").style.display = "block";
  });
  
  // 這個函數是用來下載圖片的工具函數
  // 功能：當使用者提供圖片網址（url）和檔案名稱（filename）時，自動觸發圖片下載
  // 1. 創建一個隱形的 <a> 標籤
  // 2. 設置圖片網址和下載檔案名稱
  // 3. 模擬點擊該標籤以下載圖片
  // 4. 下載後移除臨時創建的標籤
  function downloadImage(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
