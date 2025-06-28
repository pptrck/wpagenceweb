export interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  icon: any;
  slug: string;
  content?: string;
}

// Mapping des articles avec leurs fichiers markdown
const articleFiles: Record<string, () => Promise<string>> = {
  'plugins-wordpress-indispensables-2024': () => import('../data/articles/plugins-wordpress-indispensables-2024.md?raw').then(m => m.default),
  'seo-technique-wordpress-guide': () => import('../data/articles/seo-technique-wordpress-guide.md?raw').then(m => m.default),
  'wordpress-6-5-nouveautes': () => import('../data/articles/wordpress-6-5-nouveautes.md?raw').then(m => m.default),
  'optimiser-vitesse-wordpress': () => import('../data/articles/optimiser-vitesse-wordpress.md?raw').then(m => m.default),
  'securiser-wordpress-guide-2024': () => import('../data/articles/securiser-wordpress-guide-2024.md?raw').then(m => m.default),
  'strategie-contenu-seo-wordpress': () => import('../data/articles/strategie-contenu-seo-wordpress.md?raw').then(m => m.default),
};

// Fonction pour extraire les métadonnées du markdown
function extractMetadata(content: string) {
  const lines = content.split('\n');
  const metadata: Record<string, string> = {};
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('**') && line.includes(':**')) {
      const key = line.replace(/\*\*/g, '').split(':')[0].toLowerCase();
      const value = line.split(':**')[1].trim();
      metadata[key] = value;
    }
    
    // Arrêter à la première ligne vide ou au premier titre
    if (line === '' || line.startsWith('#')) {
      break;
    }
  }
  
  return metadata;
}

// Fonction pour extraire l'extrait du contenu
function extractExcerpt(content: string): string {
  const lines = content.split('\n');
  let introStart = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === '## Introduction') {
      introStart = true;
      continue;
    }
    
    if (introStart && line && !line.startsWith('#')) {
      return line.length > 200 ? line.substring(0, 197) + '...' : line;
    }
  }
  
  // Fallback: prendre le premier paragraphe non-vide
  for (const line of lines) {
    if (line.trim() && !line.startsWith('#') && !line.startsWith('**') && line.length > 50) {
      return line.length > 200 ? line.substring(0, 197) + '...' : line;
    }
  }
  
  return 'Découvrez cet article complet sur WordPress et le développement web.';
}

// Charger un article spécifique
export async function loadArticle(slug: string): Promise<string | null> {
  try {
    const loader = articleFiles[slug];
    if (!loader) {
      console.warn(`Article not found: ${slug}`);
      return null;
    }
    
    const content = await loader();
    return content;
  } catch (error) {
    console.error(`Error loading article ${slug}:`, error);
    return null;
  }
}

// Charger tous les articles avec leurs métadonnées
export async function loadAllArticles(): Promise<Article[]> {
  const articles: Article[] = [];
  
  for (const [slug, loader] of Object.entries(articleFiles)) {
    try {
      const content = await loader();
      const metadata = extractMetadata(content);
      const excerpt = extractExcerpt(content);
      
      // Mapping des icônes par catégorie
      const iconMap: Record<string, string> = {
        'WordPress': 'Code',
        'SEO': 'Search',
        'Performance': 'TrendingUp',
        'Sécurité': 'Shield'
      };
      
      const article: Article = {
        id: articles.length + 1,
        title: content.split('\n')[0].replace('# ', ''),
        excerpt,
        category: metadata.catégorie || 'WordPress',
        author: metadata.auteur || 'WP Agency Web',
        date: metadata.date || '1 Mars 2024',
        readTime: metadata['temps de lecture'] || '5 min',
        image: metadata.image || 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
        tags: metadata.tags ? metadata.tags.split(', ') : ['WordPress'],
        icon: iconMap[metadata.catégorie || 'WordPress'] || 'Code',
        slug,
        content
      };
      
      articles.push(article);
    } catch (error) {
      console.error(`Error loading article ${slug}:`, error);
    }
  }
  
  // Trier par date (plus récent en premier)
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}