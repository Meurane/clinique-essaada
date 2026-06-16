// Display strings (title / description) live in messages/{fr,en,ar}.json under
// the "team" namespace (team.departments.<index>.title / .description).
// This array carries only the structural shape; the page renders each entry
// via t(`departments.${i}.title`) and t(`departments.${i}.description`).
export const departments = [{}, {}, {}, {}];
