import { useEffect, useReducer, useState } from "react";
import { ProjectCardProps } from "../components/ProjectCard";
const MAX_TRIES = 3;

const actions = {
  add: (state: number) => state + 1,
};

export default function useGHRepos() {
  const [tries, dispatch] = useReducer<
    (state: number, action: keyof typeof actions) => number
  >((state, action) => actions[action](state), 0);
  const [data, setData] = useState<ProjectCardProps[] | undefined>();

  useEffect(() => {
    if (tries < MAX_TRIES) {
      fetch("https://api.github.com/users/ErnestoRB/repos")
        .then((res) => res.json())
        .then((data: ProjectCardProps[]) => {
          setData(
            data.filter(({ name }) => !name.toLowerCase().includes("ernestorb"))
          );
        })
        .catch((err) => dispatch("add"));
    }
  }, [tries]);

  return { data, error: tries === MAX_TRIES };
}
