import React, { useEffect, useState } from "react";
import client from "../api/client";

export default function useCourse(courseName) {
  const [isLoading, setIsLoading] = useState(true);
  const token = localStorage.getItem("token");
  const [course, setCourse] = useState({});

  const getCourse = async () => {
    try {
      const res = await client.post(`/courses/${courseName}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.data;
      setCourse(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCourse()
  }, [courseName, token]);
  return { course, isLoading };
}
