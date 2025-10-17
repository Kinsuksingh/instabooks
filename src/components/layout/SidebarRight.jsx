export default function SidebarRight() {
  return (
    <aside className="sidebar-right d-none d-lg-block p-3">
      <h6 className="fw-bold text-muted mb-3">Suggested Readers</h6>
      <div className="d-flex flex-column gap-2">
        {["booklover", "fiction_addict", "study_buddy"].map((user) => (
          <div key={user} className="d-flex align-items-center gap-2">
            <img
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${user}`}
              alt={user}
              className="rounded-circle"
              width="32"
              height="32"
            />
            <span className="fw-semibold">{user}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
