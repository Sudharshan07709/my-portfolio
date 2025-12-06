import { getActivityData } from "@/lib/getActivityData.server";
import ExtraCurricularClient from "./ExtraCurricularClient";

export default function ExtraCurricular() {
  const activities = getActivityData(); // Safe on server

  return <ExtraCurricularClient activities={activities} />;
}
