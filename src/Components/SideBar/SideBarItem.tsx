interface SideBarItemProps {
  value: string;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ value }) => {
  return <div className="sideBarItem">{value}</div>;
};

export default SideBarItem;
