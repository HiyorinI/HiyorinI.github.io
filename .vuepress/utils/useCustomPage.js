import { usePageData } from '@vuepress/client';

export default function useCustomPage() {
  const page = usePageData();
  
  return {
    page
  };
}
