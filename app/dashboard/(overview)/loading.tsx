import DashboardSkeleton from "../../ui/skeletons";


export default function Loading() {
  return <DashboardSkeleton></DashboardSkeleton>
}

// `loading.tsx`是一个基于React Suspense构建的特殊的NextJS 文件，允许在页面加载时显示的替代fallback UI.
// <SideNav>是静态内容，因此会立即展示
// 