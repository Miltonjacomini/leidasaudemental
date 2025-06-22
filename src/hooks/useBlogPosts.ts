import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { BlogPost } from '@/types/database';

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .order('date', { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export function useBlogPosts() {
  return useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  });
}
