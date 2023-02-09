import React, { useState } from "react";
import {
  SponsorCard,
  SponsorInfo,
  SponsorHeader,
  SponsorLogoBox,
  SponsorContacts,
  SponsorText,
  SponsorLogo,
  ScheduleStyle,
  SponsorsContactsLink,
  PlugText,
} from "./SponsorsStyles";
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from "uuid";

const Schedule = ({ workDays, closeModal }) => {
  
  return (
    <div onClick={closeModal}>
      {workDays.map((day) => (
        <div
          key={uuidv4()}
          style={{
            display: day.isOpen ? "flex" : "none",
            alignItems: "center",
            justifyContent: " space-between",
          }}
        >
          {day.day}
          <span>{day.isOpen ? day.from + "-" + day.to : "Closed"}</span>
        </div>
      ))}
    </div>
  );
};

export const SponsorItem = ({
  imageUrl,
  workDays,
  title,
  address,
  email,
  phone,
}) => {
  const [showModal, setShowModal] = useState(false);
  let time = "";
  if (!workDays || workDays === null || workDays === undefined) {
    time = "----------------------------------";
  } else {
    const openDay = workDays.find((item) => item.isOpen);
    if (openDay) {
      time = `${openDay.from}-${openDay.to}`;
    } else {
      time = "----------------------------------";
    }
  }
const { t} = useTranslation();
  return (
    <SponsorCard key={title}>
      <SponsorHeader>{title}</SponsorHeader>
      <SponsorInfo>
        <SponsorLogoBox>
          <SponsorLogo
            src={
              imageUrl
                ? imageUrl
                : "https://animals-city.org/wp-content/themes/animals-city/img/logo.svg"
            }
            alt="logo"
          />
        </SponsorLogoBox>
        <SponsorContacts>
          {workDays ? (
            <SponsorText>
             {t("time")}:
              <br />
              <span onClick={() => setShowModal(true)}>{time}</span>
            </SponsorText>
          ) : (
            <PlugText>
              {t("time")}:
              <br />
              <span onClick={() => setShowModal(false)}>{time}</span>
            </PlugText>
          )}
          {showModal && workDays && (
            <ScheduleStyle>
              <Schedule
                workDays={workDays}
                closeModal={() => setShowModal(false)}
              />
            </ScheduleStyle>
          )}
          {address ? (
            <SponsorsContactsLink
              href={`https://www.google.com/maps/place/${address}`}
              target="_blank"
              rel="nofollow"
            >
            {t("addres")}:
              <br />
              <span>{address}</span>
            </SponsorsContactsLink>
          ) : (
            <PlugText>
             {t("addres")}:
              <br />
              <span>----------------------------------</span>
            </PlugText>
          )}
          {email ? (
            <SponsorsContactsLink href={`mailto:${email}`}>
             {t("email")}:
              <br />
              <span>{email}</span>
            </SponsorsContactsLink>
          ) : (
            <PlugText>
                 {t("email")}:
              <br />
              <span>----------------------------------</span>
            </PlugText>
          )}
          {phone ? (
            <SponsorsContactsLink href={`tel:${phone}`}>
                 {t("phone")}:
              <br />
              <span>{phone}</span>
            </SponsorsContactsLink>
          ) : (
            <PlugText>
              {t("phone")}:
              <br />
              <span>----------------------------------</span>
            </PlugText>
          )}
        </SponsorContacts>
      </SponsorInfo>
    </SponsorCard>
  );
};