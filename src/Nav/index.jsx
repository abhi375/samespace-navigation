import {
  AnalyticsIcon,
  AnalyticsSolidIcon,
  AutoDialIcon,
  BellIcon,
  BellSolidIcon,
  CampaignIcon,
  HelpIcon,
  HelpSolidIcon,
  Logo,
  PulseIcon,
  PulseSolidIcon,
  SettingsIcon,
  SettingsSolidIcon,
  StudioIcon,
  StudioSolidIcon,
  UsersIcon,
  UsersSolidIcon,
} from "../icons";
import "./styles.scss";
import Avatar from "../assets/avatar.png";
import Tooltip from "../Tooltip";

export default function Nav({
  accent,
  tooltipBackground,
  iconStyle,
  iconColor,
  labelHoverStyle,
}) {
  return (
    <nav
      className={`nav ${accent === "#fff" ? "with-shadow" : ""}`}
      style={{
        backgroundColor: accent ? accent : "#1f84e6",
        color: iconColor ? iconColor : "#fff",
      }}
    >
      <div className="wrapper">
        <Logo />

        {labelHoverStyle === "floating" ? (
          <div className="center-functions floating-labels">
            <Tooltip
              content="Analytics"
              direction="bottom"
              backgroundColor={tooltipBackground === "black" ? "#000" : accent}
            >
              <div className="icon">
                {iconStyle === "lined" ? (
                  <AnalyticsIcon />
                ) : (
                  <AnalyticsSolidIcon />
                )}
              </div>
            </Tooltip>
            <Tooltip
              content="Pulse"
              direction="bottom"
              backgroundColor={tooltipBackground === "black" ? "#000" : accent}
            >
              <div className="icon">
                {iconStyle === "lined" ? <PulseIcon /> : <PulseSolidIcon />}
              </div>
            </Tooltip>

            <Tooltip
              backgroundColor={tooltipBackground === "black" ? "#000" : accent}
              content="Campaign"
              direction="bottom"
            >
              <div className="icon">
                {iconStyle === "lined" ? <CampaignIcon /> : <AutoDialIcon />}
              </div>
            </Tooltip>

            <Tooltip
              backgroundColor={tooltipBackground === "black" ? "#000" : accent}
              content="Users"
              direction="bottom"
            >
              <div className="icon">
                {iconStyle === "lined" ? <UsersIcon /> : <UsersSolidIcon />}
              </div>
            </Tooltip>
            <Tooltip
              backgroundColor={tooltipBackground === "black" ? "#000" : accent}
              content="Studio"
              direction="bottom"
            >
              <div className="icon">
                {iconStyle === "lined" ? <StudioIcon /> : <StudioSolidIcon />}
              </div>
            </Tooltip>
          </div>
        ) : (
          <div className="center-functions inline-labels">
            <div className="icon">
              <div className="icon-label">Analytics</div>
              {iconStyle === "lined" ? (
                <AnalyticsIcon />
              ) : (
                <AnalyticsSolidIcon />
              )}
            </div>

            <div className="icon">
              <div className="icon-label">Pulse</div>
              {iconStyle === "lined" ? <PulseIcon /> : <PulseSolidIcon />}
            </div>

            <div className="icon">
              <div className="icon-label">AutoDial</div>
              {iconStyle === "lined" ? <CampaignIcon /> : <AutoDialIcon />}
            </div>

            <div className="icon">
              <div className="icon-label">Users</div>
              {iconStyle === "lined" ? <UsersIcon /> : <UsersSolidIcon />}
            </div>

            <div className="icon">
              <div className="icon-label">Studio</div>
              {iconStyle === "lined" ? <StudioIcon /> : <StudioSolidIcon />}
            </div>
          </div>
        )}

        <div className="right">
          <div className="icon">
            {iconStyle === "lined" ? <SettingsIcon /> : <SettingsSolidIcon />}
          </div>

          <div className="icon">
            {iconStyle === "lined" ? <HelpIcon /> : <HelpSolidIcon />}
          </div>

          <div className="icon">
            {iconStyle === "lined" ? <BellIcon /> : <BellSolidIcon />}
          </div>
          <img src={Avatar} width="32px" height="32px" />
        </div>
      </div>
    </nav>
  );
}
