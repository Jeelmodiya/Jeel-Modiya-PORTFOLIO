const config = {
  title: "Jeel Modiya | Developer",
  description: {
    long: "Explore the portfolio of Jeel Modiya, a passionate developer building innovative web applications and solutions. Experienced in full-stack development, DevOps, and creating impactful digital experiences.",
    short:
      "Discover the portfolio of Jeel Modiya, a developer creating innovative web solutions and applications.",
  },
  keywords: [
    "Jeel Modiya",
    "jeelmodiya",
    "Jeel Modiya portfolio",
    "portfolio",
    "full-stack developer",
    "web development",
    "DevOps",
    "Ride Share Flow",
    "Track app",
    "creative technologist",
    "interactive websites",
    "AWS",
    "DevSecOps",
    "AIOps",
    "Azure",
  ],
  author: "Jeel Modiya",
  email: "jeelmodiya@gmail.com",
  site: "https://jeelmodiya.com",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/jeel-modiya-a5070b304/",
    instagram: "https://www.instagram.com/it.s_jeel_/",
    facebook: "https://www.facebook.com/profile.php?id=100010029821759",
    github: "https://github.com/Jeelmodiya/",
  },
};
export { config };
