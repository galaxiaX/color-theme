import NavBar from "@/components/NavBar";
import Report from "@/components/Report";
import TopBar from "@/components/TopBar";

const ReportPage = () => {
  const reportLists = [
    {
      name: "Galaxia Zero",
      role: "Fullstack developer",
      title:
        "How to stop annoying notification pop-up on Chrome after downloading Photo from Google Photos",
      text: "Hi there, using Chrome on ARM Mac, downloading photos from Google Photos, each time download is complete, a box like this pops up in Chrome and BLOCKS all other actions on Chrome for a few seconds. You can't continue to use Google Photos until you either wait like 10 seconds, or minimize this pop-up. Very annoying. Any idea how to stop this? Thanks",
      timestamp: "2",
      likes: "3",
    },
    {
      name: "Phillip J. Coulson",
      role: "Backend developer",
      title:
        "How can I Inform Google I am my network administrator so I can unlock safesearch?",
      text: "My safe search is locked on. It says it was locked by Network administrator. Or parental control. I am the owner of this phone and the only person on the network. I am over 18.",
      timestamp: "5",
      likes: "4",
    },
    {
      name: "Peter Parker",
      role: "Frontend developer",
      title: "Stumbled On Massive Spammer Network of Sites",
      text: "I have stumbled upon massive spamming of Google results from a wildlife control SEO company.  They have four generic wildlife control sites: AAAnimalControl.com Wildlife-Removal.com RaccoonAtticGuide.com Bird-Removal.com When you do a reverse lookup on the IP addresses, thousands of other domains to fake websites show up linked to local markets across the US and they have fake Google listings tied to those everywhere. It's mind blowing. The SEO company site is at AugieWildlife.com. I'd likely roll up all of this data into a spreadsheet and easily be able to submit it.  What would be the best way to report this for a manual action by an actual Google Staff member?",
      timestamp: "1",
      likes: "5",
    },
    {
      name: "Tony Stark",
      role: "DevOps developer",
      title: "Why does google.com publish multiple copies of the same article?",
      text: "When I log onto Google.com I am finding multiple copies of articles on the site. If I go and ignore the articles and they disappear- they seem to return the next time I log onto GOOGLE.com. WHY?",
      timestamp: "3",
      likes: "6",
    },
    {
      name: "Steve Rogers",
      role: "UX/UI designer",
      title: "Remove Outdated Content Tool Non-Functional",
      text: "I have been trying to use the remove outdated content tool for a while and my requests are denied within a few seconds. If you click the image location on google you can see that they are no longer present on the website, but are still showing in google images, and are getting denied anyway. If anyone knows how to use this tool or if it is currently not working please let me know.",
      timestamp: "4",
      likes: "7",
    },
  ];

  return (
    <>
      <TopBar label="Report" />
      <section className="sm:px-20">
        {reportLists.map((report, index) => (
          <Report key={index} report={report} />
        ))}
      </section>
      <NavBar />
    </>
  );
};

export default ReportPage;
