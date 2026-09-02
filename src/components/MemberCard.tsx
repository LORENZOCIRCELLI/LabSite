import type { Member } from "../lib/members";

interface MemberCardProps {
  member: Member;
}

export default function MemberCard({
  member,
}: MemberCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={member.photo}
          alt={member.name}
          onError={(event) => {
            event.currentTarget.src = "/members/default-member.jpg";
          }}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {member.name}
        </h2>

        <p className="mt-1 text-sm font-medium text-blue-600">
          {member.role}
        </p>

        <p className="mt-4 leading-relaxed text-gray-600">
          {member.bio}
        </p>

        {member.researchAreas?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {member.researchAreas.map((area) => (
              <span
                key={area}
                className="
                  rounded-full
                  bg-gray-100
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-gray-700
                "
              >
                {area}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-blue-600 hover:text-blue-800"
            >
              Email
            </a>
          )}

          {member.lattes && (
            <a
              href={member.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Lattes
            </a>
          )}

          {member.github && (
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              GitHub
            </a>
          )}

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </article>
  );
}