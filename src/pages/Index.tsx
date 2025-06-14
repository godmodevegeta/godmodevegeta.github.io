import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Distributed Microservices Platform",
      description: "Built a scalable microservices architecture handling 10M+ daily requests with 99.9% uptime. Implemented service mesh, auto-scaling, and comprehensive monitoring.",
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
      technologies: ["Kubernetes", "Go", "gRPC", "Redis", "PostgreSQL"],
      category: "backend",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      description: "Developed a high-performance analytics platform processing billions of events daily with sub-second query response times using stream processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Apache Kafka", "ClickHouse", "D3.js"],
      category: "frontend",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "ML-Powered Recommendation Engine",
      description: "Designed and implemented a machine learning recommendation system that improved user engagement by 40% using collaborative filtering and deep learning.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Apache Spark", "AWS SageMaker", "Docker"],
      category: "ml",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "Cloud Infrastructure Automation",
      description: "Built Infrastructure as Code solutions reducing deployment time by 80% and ensuring consistent environments across dev, staging, and production.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      technologies: ["Terraform", "AWS", "Docker", "GitHub Actions", "Ansible"],
      category: "devops",
      github: "#",
      demo: "#"
    }
  ];

  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Lessons Learned from Scaling Systems at Big Tech",
      excerpt: "Key insights from building and maintaining systems that serve millions of users daily, including common pitfalls and best practices.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Engineering"
    },
    {
      id: 2,
      title: "The Future of AI in Software Engineering",
      excerpt: "Exploring how artificial intelligence is transforming the way we write, test, and deploy code, and what it means for engineers.",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Building Resilient Distributed Systems",
      excerpt: "A deep dive into designing fault-tolerant systems that can handle failures gracefully and maintain service availability.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Architecture"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Go", "Python", "TypeScript", "Java", "Rust"] },
    { category: "Frontend", items: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Django", "FastAPI", "gRPC", "GraphQL"] },
    { category: "Cloud & DevOps", items: ["AWS", "Kubernetes", "Docker", "Terraform", "GitHub Actions"] },
    { category: "Databases", items: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse", "DynamoDB"] },
    { category: "ML & Data", items: ["TensorFlow", "PyTorch", "Apache Spark", "Kafka", "Airflow"] }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900 dark:text-white">
              Alex Chen
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'blog', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-gray-900 dark:hover:text-white ${
                    activeSection === item ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {item}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 dark:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'projects', 'blog', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize block w-full text-left px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              Alex Chen
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light">
              Senior Software Engineer @ Big Tech
            </h2>
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Building scalable systems that power millions of users. Passionate about distributed architectures, 
              machine learning, and engineering excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black px-8 py-3 text-lg group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3 text-lg"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a Senior Software Engineer with 8+ years of experience building large-scale distributed systems 
                at top tech companies. I specialize in backend architecture, cloud infrastructure, and machine learning 
                systems that serve millions of users globally.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently working on next-generation AI infrastructure, I'm passionate about solving complex technical 
                challenges and mentoring the next generation of engineers. I believe in writing clean, maintainable code 
                and building systems that stand the test of time.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <Button variant="outline" className="border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black">
                  <Download size={16} className="mr-2" />
                  Download Resume
                </Button>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
              <div className="grid gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <Badge 
                          key={skillIndex} 
                          variant="secondary" 
                          className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          
          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'backend', 'frontend', 'ml', 'devops'].map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`capitalize ${
                  selectedCategory === category 
                    ? 'bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black' 
                    : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {category === 'ml' ? 'Machine Learning' : category === 'devops' ? 'DevOps' : category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    <Button size="sm" variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Latest Thoughts
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition-all duration-300 cursor-pointer group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-gray-900 dark:bg-white text-white dark:text-black">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                    <Button size="sm" variant="ghost" className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 p-0">
                      Read More →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-black">
              View All Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  or just having a chat about technology and engineering. Feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                    <Mail size={20} className="text-white dark:text-black" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">alex.chen@email.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                    <Linkedin size={20} className="text-white dark:text-black" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">LinkedIn</p>
                    <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/alexchen</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                    <Github size={20} className="text-white dark:text-black" />
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">GitHub</p>
                    <p className="text-gray-600 dark:text-gray-300">github.com/alexchen</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-white dark:bg-black border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-white dark:bg-black border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-2 bg-white dark:bg-black border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-gray-900 dark:focus:border-white focus:outline-none resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-black">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
              © 2024 Alex Chen. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;