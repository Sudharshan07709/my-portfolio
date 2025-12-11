

import { getActivityData } from "@/lib/getActivityData.server";
import ExtraCurricularClient from "./ExtraCurricularClient";

export default function ExtraCurricular() {
  const activities = getActivityData();
  return <ExtraCurricularClient activities={activities} />;
}
