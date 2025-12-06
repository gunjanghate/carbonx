import CardNav from '../components/ui/card-nav'
// import logo from './logo.svg';

export default function Navbar() {
  const items = [
    {
      label: "Home",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "CarbonX", ariaLabel: "Go to CarbonX home", href: "/" }
      ]
    },
    {
      label: "Main",
      bgColor: "#12071A",
      textColor: "#fff",
      links: [
        { label: "Menu", ariaLabel: "Open menu", href: "#" },
        { label: "Rewards", ariaLabel: "View Rewards", href: "/rewards" },
        { label: "How it works", ariaLabel: "Scroll to How it works", href: "#how-it-works" },
        { label: "Why CarbonX", ariaLabel: "Scroll to Why CarbonX", href: "#why" }
      ]
    },
    {
      label: "AI Tools",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "AI Carbon Calculator", ariaLabel: "AI Carbon Calculator", href: "/ai-calculator" },
        { label: "AI Plastic Calculator", ariaLabel: "AI Plastic Calculator", href: "/plastic-calculator" },
        { label: "Water Footprint Calculator", ariaLabel: "Water Footprint Calculator", href: "/water-calculator" },
        { label: "Event Planner", ariaLabel: "Event Planner", href: "/event-planner" },
        { label: "Plastic Tracker", ariaLabel: "Plastic Tracker", href: "/plastic-tracker" }
      ]
    },
    {
      label: "Dashboard",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Dashboard", ariaLabel: "Go to Dashboard", href: "/dashboard" }
      ]
    }
  ];

  return (
    <CardNav
      logo={""}
      logoAlt="Company Logo"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};