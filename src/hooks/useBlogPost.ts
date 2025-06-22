import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { BlogPost } from '@/types/database';

async function fetchBlogPost(id: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null;
    }
    throw new Error(error.message);
  }

  return data;
}

export function useBlogPost(id: string) {
  return useQuery({
    queryKey: ['blog-post', id],
    queryFn: () => fetchBlogPost(id),
    enabled: !!id,
  });
}
