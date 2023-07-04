import { metadata } from "../layout";
import StudentsLayout from "@/features/Dashboard/Students/components/StudentsLayout";

metadata.title = "Manage Students | Dashboard";

export default function Layout({ children }) {
  return <StudentsLayout>{children}</StudentsLayout>;
}
