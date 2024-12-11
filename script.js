"use strict";
let data = {
  users: [
    {
      id: 1,
      username: "karthick",
      password: "karthick@123",
      role: "user",
      meetings: [
        {
          id: 201,
          name: "Client Meeting",
          date: new Date().toISOString().split("T")[0],
          description: "Discuss team updates and progress.",
          join_link: "https://example.com/join/201",
        },
        {
          id: 201,
          name: "Team Meeting",
          date: new Date().toISOString().split("T")[0],
          description: "Discuss team updates and progress.",
          join_link: "https://example.com/join/201",
        },
        {
          id: 201,
          name: "Team Meeting",
          date: "2024-12-09",
          description: "Discuss team updates and progress.",
          join_link: "https://example.com/join/201",
        },
        {
          id: 202,
          name: "Project Discussion",
          date: new Date().toISOString().split("T")[0],
          description: "Detailed discussion on project requirements.",
          join_link: "https://example.com/join/202",
        },
        {
          id: 203,
          name: "Sprint Planning",
          date: "2024-12-02",
          description: "Planning for the next sprint.",
          join_link: "https://example.com/join/203",
        },
        {
          id: 204,
          name: new Date().toISOString().split("T")[0],
          date: "2024-12-04",
          description: "Showcase of the latest product features.",
          join_link: "https://example.com/join/204",
        },
        {
          id: 205,
          name: "Client Feedback",
          date: "2024-12-02",
          description: "Gathering feedback from the client on deliverables.",
          join_link: "https://example.com/join/205",
        },
        {
          id: 206,
          name: "Quarterly Review",
          date: "2024-12-03",
          description: "Reviewing performance over the last quarter.",
          join_link: "https://example.com/join/206",
        },
      ],
    },
    {
      id: 2,
      username: "balaji",
      password: "balaji@123",
      role: "user",
      meetings: [
        {
          id: 207,
          name: "Knowledge Transfer",
          date: new Date().toISOString().split("T")[0],
          description: "Meeting with client to finalize deliverables.",
          join_link: "https://example.com/join/204",
        },
        {
          id: 207,
          name: "Client Meeting",
          date: new Date().toISOString().split("T")[0],
          description: "Meeting with client to finalize deliverables.",
          join_link: "https://example.com/join/207",
        },
        {
          id: 208,
          name: "Code Review",
          date: "2024-12-04",
          description: "Review of the codebase and updates.",
          join_link: "https://example.com/join/208",
        },
        {
          id: 209,
          name: "Retrospective",
          date: new Date().toISOString().split("T")[0],
          description: "Sprint retrospective meeting.",
          join_link: "https://example.com/join/209",
        },
        {
          id: 214,
          name: "Team Meeting",
          date: "2024-12-09",
          description: "Team Meeting",
          join_link: "https://example.com/join/214",
        },
        {
          id: 210,
          name: "Budget Review",
          date: "2024-12-02",
          description: "Reviewing the budget for the next quarter.",
          join_link: "https://example.com/join/210",
        },
        {
          id: 211,
          name: "Team Building",
          date: "2024-12-02",
          description: "Team-building exercises and activities.",
          join_link: "https://example.com/join/211",
        },
        {
          id: 212,
          name: new Date().toISOString().split("T")[0],
          date: "2024-12-03",
          description:
            "Assessing performance and setting goals for next quarter.",
          join_link: "https://example.com/join/212",
        },
      ],
    },
    {
      id: 3,
      username: "ganesh",
      password: "ganesh@123",
      role: "admin",
      meetings: [
        {
          id: 213,
          name: "Client Call",
          date: new Date().toISOString().split("T")[0],
          description: "Client call",
          join_link: "https://example.com/join/213",
        },
        {
          id: 213,
          name: "Admin Sync",
          date: "2024-12-09",
          description: "Synchronization meeting for admin tasks.",
          join_link: "https://example.com/join/213",
        },
        {
          id: 210,
          name: "Team Meeting",
          date: "2024-12-09",
          description: "Meeting to discuss organizational updates.",
          join_link: "https://example.com/join/214",
        },
        {
          id: 213,
          name: "Team meeting",
          date: new Date().toISOString().split("T")[0],
          description: "Synchronization meeting for admin tasks.",
          join_link: "https://example.com/join/213",
        },
        {
          id: 214,
          name: "Team Meeting",
          date: "2024-12-01",
          description: "Meeting to discuss organizational updates.",
          join_link: "https://example.com/join/214",
        },
        {
          id: 215,
          name: "Budget Planning",
          date: "2024-12-02",
          description: "Planning the budget for the upcoming year.",
          join_link: "https://example.com/join/215",
        },
        {
          id: 216,
          name: "Project Kickoff",
          date: new Date().toISOString().split("T")[0],
          description: "Kickoff meeting for the new project.",
          join_link: "https://example.com/join/216",
        },
        {
          id: 217,
          name: new Date().toISOString().split("T")[0],
          date: "2024-12-02",
          description: "Human resources review meeting.",
          join_link: "https://example.com/join/217",
        },
        {
          id: 218,
          name: "Strategy Meeting",
          date: new Date().toISOString().split("T")[0],
          description: "Discussing the company strategy for the next quarter.",
          join_link: "https://example.com/join/218",
        },
      ],
    },
  ],
};
const darkmodebtn = document.querySelector(".darkmodebtn");
const logincontainer = document.querySelector(".logincontainer");
const navbar = document.querySelector(".navbar");
const content = document.querySelector(".content");
const TodaysMeetings = document.querySelector(".TodaysMeetings");
const summary = document.querySelector(".summary");
const addmeetingbtn = document.querySelector(".addmeetingbtn");
const newmeetingbtn = document.querySelector(".newmeetingbtn");
const Cancelbtn = document.querySelector(".Cancelbtn");
const syncmeetingbtn = document.querySelector(".syncmeetingbtn");
const Addformdiv = document.querySelector(".form-input form");
const meetingnamein = document.querySelector(".meeting-name");
const meetingdatein = document.querySelector(".date-in");
const meetingdescrptionin = document.querySelector(".Textarea");
const loginbtn = document.querySelector(".loginbtn");
const usernamein = document.querySelector("#username");
const passwordin = document.querySelector("#Password");
const todaydate = new Date().toISOString().split("T")[0];
const welcometag = document.querySelector(".heloname");
const root = document.documentElement;
const Instantmeetingbtn = document.querySelector(".Instantmeetingbtn");
const downpopup = document.querySelector(".downpopup");
const sortmeetingbtn = document.querySelector(".sortmeetingbtn");
let Todays = "";
let historymeet = "";
let userName = "karthick";
let loginUser = null;
meetingdatein.setAttribute("min", todaydate);
syncmeetingbtn.addEventListener("click", () => {
  root.style.cursor = "wait";
  showdownpopup("Syncing calendar...");
  setTimeout(() => {
    root.style.cursor = "auto";
  }, 1000);
});
function showdownpopup(msg) {
  downpopup.style.display = "block";
  downpopup.textContent = msg;
  setTimeout(() => {
    downpopup.style.display = "none";
    downpopup.textContent = "";
  }, 2000);
}

darkmodebtn.addEventListener("click", () => {
  const currentColor = getComputedStyle(root)
    .getPropertyValue("--secondary-color")
    .trim();

  if (currentColor === "#95d2b3") {
    root.style.setProperty("--secondary-color", "#79cba2");
    root.style.setProperty("--primary-color", "#364832");
    root.style.setProperty("--background-color", "#1e2c1b");
    root.style.setProperty("--buttoncolor", "#5d7c69");
    root.style.setProperty("--labelcolor", "#37684f");
    showdownpopup("Dark Mode Enable ");
    darkmodebtn.textContent = "Light Mode";
  } else {
    root.style.setProperty("--secondary-color", "#95d2b3");
    root.style.setProperty("--primary-color", "#d8efd3");
    root.style.setProperty("--background-color", "#c9eac2");
    root.style.setProperty("--buttoncolor", "#378575");
    root.style.setProperty("--labelcolor", "#499c8c");
    showdownpopup("Light Mode Enable ☀️");
    darkmodebtn.textContent = "Dark Mode";
  }
});

Instantmeetingbtn.addEventListener("click", () => {
  window.open("https://meet.google.com/new", "_blank");
});

loginbtn.addEventListener("click", () => {
  let tempuser = usernamein.value;
  let temppass = passwordin.value;
  let logedInUser = data.users.find((user) => {
    return user.username === tempuser && user.password === temppass;
  });
  if (logedInUser) {
    console.log(`successfully login `);
    showdownpopup("successfully login");
    userName = tempuser;
    loginUser = logedInUser;
    logincontainer.style.display = "none";
    navbar.style.display = "flex";
    content.style.display = "flex";
    welcometag.textContent = `Hello ${userName} 🖖`;
    Todays = loginUser.meetings.filter(
      (meet) => new Date(meet.date) >= new Date(todaydate)
    );
    historymeet = loginUser.meetings.filter(
      (meet) => new Date(meet.date) < new Date(todaydate)
    );
    AddSummarMeeting();
    Addtodaysmeet();
  } else {
    showdownpopup("UserName and Password Doesn't match !");
    
  }
});
function Addtodaysmeet() {
  if (!TodaysMeetings.classList.contains("box")) {
    const div = document.createElement("div");
    div.classList.add("box");
    const lable = document.createElement("label");
    lable.textContent = "Future meetings";
    div.appendChild(lable);
    TodaysMeetings.appendChild(div);
  }
  Todays.forEach((curmeet) => {
    const meetdiv = document.createElement("div");
    meetdiv.classList.add("meet");
    const meetName = document.createElement("p");
    meetName.textContent = curmeet.name;
    meetdiv.appendChild(meetName);
    const meetDate = document.createElement("p");
    meetDate.textContent = curmeet.date;
    meetdiv.appendChild(meetDate);
    const joinButton = document.createElement("button");
    joinButton.classList.add("btn");
    joinButton.textContent = "join";
    const link = curmeet.join_link;
    joinButton.addEventListener("click", () => {
      window.open(link, "_blank");
    });
    
    meetdiv.appendChild(joinButton);
    TodaysMeetings.appendChild(meetdiv);
  });
}

function AddSummarMeeting() {
  if (!summary.classList.contains("box")) {
    const div = document.createElement("div");
    div.classList.add("box");
    const lable = document.createElement("label");
    lable.textContent = "Meeting History";
    div.appendChild(lable);
    summary.appendChild(div);
  }
  historymeet.forEach((curmeet) => {
    const summarymeetDiv = document.createElement("div");
    summarymeetDiv.classList.add("meet");

    const meetingName = curmeet.name;
    const ptag = document.createElement("p");
    ptag.textContent = meetingName;
    summarymeetDiv.appendChild(ptag);

    const meetingDate = curmeet.date;
    const dateTag = document.createElement("p");
    dateTag.textContent = meetingDate;
    summarymeetDiv.appendChild(dateTag);
    summary.appendChild(summarymeetDiv);
  });
}
function SortbyDate() {
  Todays.sort((a, b) => new Date(a.date) - new Date(b.date));
  historymeet.sort((a, b) => new Date(a.date) - new Date(b.date));
  TodaysMeetings.innerHTML = "";
  summary.innerHTML = "";
  AddSummarMeeting();
  Addtodaysmeet();
}
function SortbyName() {
  Todays.sort((a, b) => a.name.localeCompare(b.name));
  historymeet.sort((a, b) => a.name.localeCompare(b.name));
  TodaysMeetings.innerHTML = "";
  summary.innerHTML = "";
  AddSummarMeeting();
  Addtodaysmeet();
}
sortmeetingbtn.addEventListener("click", () => {
  
  if (sortmeetingbtn.textContent === "Sort Meeting By Date") {
    SortbyDate();
    sortmeetingbtn.textContent = "Sort Meeting By Name";
  } else {
    SortbyName();
    sortmeetingbtn.textContent = "Sort Meeting By Date";
  }
});

const removepopup = () => {
  Addformdiv.style.display = "none";
  content.classList.remove("blur");
};
Cancelbtn.addEventListener("click", removepopup);
newmeetingbtn.addEventListener("click", (e) => {
  e.preventDefault();
  content.classList.add("blur");
  Addformdiv.style.display = "flex";
});
addmeetingbtn.addEventListener("click", (e) => {
  e.preventDefault();
   if (
    !meetingnamein.value ||
    !meetingdatein.value ||
    !meetingdescrptionin.value
  ) {
    alert("Please fill in all the fields!");
    return;
  }
  let newmeet = {
    id: Date.now(),
    name: meetingnamein.value,
    date: new Date(meetingdatein.value).toISOString().split("T")[0],
    description: meetingdescrptionin.value,
    join_link: `https://example.com/join/${Date.now()}`,
  };
  meetingdatein.value = "";
  meetingdescrptionin.value = "";
  meetingnamein.value = "";
  loginUser.meetings = [...loginUser.meetings, newmeet];
  showdownpopup("Added a new Meeting");
  refresh();
  removepopup();
});
function refresh() {
  TodaysMeetings.innerHTML = "";
  summary.innerHTML = "";
  Todays = loginUser.meetings.filter(
    (meet) => new Date(meet.date) >= new Date(todaydate)
  );
  historymeet = loginUser.meetings.filter(
    (meet) => new Date(meet.date) < new Date(todaydate)
  );

  AddSummarMeeting();
  Addtodaysmeet();
}
