import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import type { BlogContent } from '@/types/database';

async function fetchBlogContent(blogPostId: string): Promise<BlogContent | null> {
  const { data, error } = await supabase
    .from('blog_content')
    .select('*')
    .eq('id_blog_content', blogPostId)
    .eq('status', 'ready')
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      return null;
    }
    throw new Error(error.message);
  }

  return data;
}

export function useBlogContent(blogPostId: string) {
  return useQuery({
    queryKey: ['blog-content', blogPostId],
    queryFn: () => fetchBlogContent(blogPostId),
    enabled: !!blogPostId,
  });
}
