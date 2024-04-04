import React from "react";
import { useParams } from "react-router-dom";

export default function PortfolioDetailPage() {
  const param = useParams();

  return <div>{param.portfolioId}페이지 입니다.</div>;
}
