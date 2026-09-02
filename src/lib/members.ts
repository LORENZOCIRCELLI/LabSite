export interface Member {
  slug: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  researchAreas: string[];
  email?: string;
  lattes?: string;
  linkedin?: string;
  github?: string;
}

type MemberJson = Omit<Member, "slug">;

function loadMembers(
  modules: Record<string, { default: MemberJson }>
): Member[] {
  return Object.entries(modules)
    .map(([path, module]) => {
      const fileName = path.split("/").pop()!;

      const slug = fileName.replace(".json", "");

      return {
        ...module.default,
        slug,
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

const professorModules = import.meta.glob<{ default: MemberJson }>(
  "../data/members/professors/*.json",
  {
    eager: true,
  }
);

const studentModules = import.meta.glob<{ default: MemberJson }>(
  "../data/members/students/*.json",
  {
    eager: true,
  }
);

export const professors = loadMembers(professorModules);

export const students = loadMembers(studentModules);