export type BlogContentStatus = 'draft' | 'ready' | 'archived';

export interface Database {
  public: {
    Tables: {
      blog_posts: {
        Row: {
          id: string;
          title: string;
          excerpt: string;
          date: string;
          read_time: string;
          tags: string[];
          gradient: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          excerpt: string;
          date: string;
          read_time: string;
          tags: string[];
          gradient: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          excerpt?: string;
          date?: string;
          read_time?: string;
          tags?: string[];
          gradient?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      blog_content: {
        Row: {
          id: string;
          id_blog_content: string;
          content: string;
          status: BlogContentStatus;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          id_blog_content: string;
          content: string;
          status?: BlogContentStatus;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          id_blog_content?: string;
          content?: string;
          status?: BlogContentStatus;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      blog_content_status: BlogContentStatus;
    };
  };
}

export type BlogPost = Database['public']['Tables']['blog_posts']['Row'];
export type BlogContent = Database['public']['Tables']['blog_content']['Row'];
