import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, User, Search, Tag, TrendingUp } from "lucide-react";
import classicBurger from "@/assets/classic-burger.jpg";
import bbqBurger from "@/assets/bbq-burger.jpg";
import veggieBurger from "@/assets/veggie-burger.jpg";
import heroBurger from "@/assets/hero-burger.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Made with Care, Cooked to Perfection",
      excerpt: "Discover the secrets behind our beef blend and learn how we achieve that perfect juicy texture that keeps customers coming back for more.",
      image: heroBurger,
      category: "Behind the Scenes",
      author: "Sarathi",
      date: "2025-03-15",
      readTime: "5 min read",
      featured: true
    },
    {
      id: 2,
      title: "Plant-Based Revolution: Our Veggie Burger Journey",
      excerpt: "From concept to creation, follow our journey in developing the perfect plant-based burger that satisfies even the most devoted meat lovers.",
      image: veggieBurger,
      category: "Innovation",
      author: "Saran",
      date: "2025-04-10",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 3,
      title: "Local Partnerships: Supporting Our Community",
      excerpt: "Meet the local farmers and suppliers who help us bring fresh, sustainable ingredients to your plate every single day.",
      image: classicBurger,
      category: "Community",
      author: "David ",
      date: "2025-03-08",
      readTime: "3 min read",
      featured: false
    },
    {
      id: 4,
      title: "BBQ Mastery: The Science Behind Our Smoky Flavors",
      excerpt: "Dive deep into the techniques and ingredients that make our BBQ Bacon Deluxe a customer favorite, including our secret sauce recipe.",
      image: bbqBurger,
      category: "Recipes",
      author: "Chef Kumara",
      date: "2025-04-05",
      readTime: "6 min read",
      featured: false
    },
    {
      id: 5,
      title: "Customer Stories: Why BurgerCraft Matters",
      excerpt: "Heartwarming stories from our community about how BurgerShop has become part of their special moments and daily lives.",
      image: classicBurger,
      category: "Community",
      author: "Shifa",
      date: "2025-08-28",
      readTime: "3 min read",
      featured: false
    }
  ];

  const categories = ["All", "Behind the Scenes", "Innovation", "Community", "Recipes", "Sustainability"];
  const popularTags = ["#BurgerShop", "#LocalFood", "#Sustainability", "#Recipes", "#Community", "#Innovation"];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <section className="py-16 bg-gradient-to-br from-background to-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              BurgerShop Blog
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Stories, recipes, and insights from the heart of BurgerShop. Discover what goes into making every burger special.
            </p>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Search articles..." className="pl-10" />
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {featuredPost && (
            <section className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-bold">Featured Story</h2>
              </div>
              <Card className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Button className="w-fit bg-gradient-primary">
                      Read Full Story
                    </Button>
                  </div>
                </div>
              </Card>
            </section>
          )}

          <div className="grid lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    size="sm"
                    className="hover:bg-primary hover:text-primary-foreground"
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="space-y-8">
                {regularPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-elegant transition-all duration-300">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <Badge variant="secondary" className="mb-3">
                          {post.category}
                        </Badge>
                        <h3 className="text-xl font-bold mb-3 hover:text-primary cursor-pointer transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Button variant="outline">
                          Read More
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <h3 className="font-bold">Newsletter</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest stories and updates delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <Input placeholder="Your email address" />
                    <Button className="w-full bg-gradient-primary">
                      Subscribe
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="font-bold flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    Popular Tags
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge key={tag} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <h3 className="font-bold">Recent Posts</h3>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {regularPosts.slice(0, 3).map((post, index) => (
                      <div key={post.id}>
                        <h4 className="font-medium text-sm hover:text-primary cursor-pointer transition-colors">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        {index < 2 && <Separator className="mt-4" />}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;