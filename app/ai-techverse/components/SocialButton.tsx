interface ButtonProps {
  buttons: { label: string; href: string; icon: string }[];
}

const SocialButton: React.FC<ButtonProps> = ({ buttons }) => {
  return (
    <>
      {buttons.map((button) => (
        <a target="_blank" href={button.href} key={button.label} className='socialLinks' rel="noopener noreferrer">
          <img src={button.icon} alt={button.label} className="justify-self-start" />
          {button.label}
        </a>
      ))}
    </>
  );
};

export default SocialButton;
