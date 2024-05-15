/* eslint-disable no-unused-vars */
import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";
import styled from "styled-components";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import DataItem from "../../ui/DataItem";
import { Flag } from "../../ui/Flag";

const StyledBookingDataBox = styled.section`
  /* Box */
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  /* Style */
  background-color: var(--color-grey-0);
  overflow: hidden;
`;

const Header = styled.header`
  /* Font */
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;

  /* Box */
  padding: 2rem 4rem;

  /* Layout */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Style */
  background-color: var(--color-brand-500);

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }

  & div:first-child {
    /* Font */
    font-weight: 600;

    /* Layout */
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`;

const Section = styled.section`
  padding: 3.2rem 4rem 1.2rem;
`;

const Guest = styled.div`
  /* Font */
  color: var(--color-grey-500);

  /* Box */
  margin-bottom: 1.6rem;

  /* Layout */
  display: flex;
  align-items: center;
  gap: 1.2rem;

  & p:first-of-type {
    color: var(--color-grey-700);
    font-weight: 500;
  }
`;

const Price = styled.div`
  /* Layout */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Font */
  color: ${(props) =>
    props.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  /* Box */
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  /* Style */
  background-color: ${(props) =>
    props.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};

  & p:last-child {
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`;

const Footer = styled.footer`
  /* Font */
  color: var(--color-grey-500);
  font-size: 1.2rem;
  text-align: right;

  padding: 1.6rem 4rem;
`;

function BookingDataBox({ booking }) {
  const {
    created_at,
    startDate,
    endDate,
    numNights,
    numGuests,
    cabinPrice,
    extrasPrice,
    totalPrice,
    hasBreakfast,
    observations,
    isPaid,
    guests: { fullname: guestName, email, country, countryFlag, nationalID },
    cabins: { name: cabinName },
  } = booking;

  return (
    <StyledBookingDataBox>
      <Header>
        <div>
          <HiOutlineHomeModern />
          <p>
            {numNights} nights in Cabin <span>{cabinName}</span>
          </p>
        </div>

        <p>
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
      </Header>

      <Section>
        <Guest>
          {countryFlag && <Flag src={countryFlag} alt={`Flag of ${country}`} />}
          <p>
            {guestName} {numGuests > 1 ? `+ ${numGuests - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{email}</p>
          <span>&bull;</span>
          <p>National ID {nationalID}</p>
        </Guest>

        {observations && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label="observations"
          >
            {observations}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label="Breakfast included?">
          {hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <Price isPaid={isPaid}>
          <DataItem icon={<HiOutlineCurrencyDollar />} label="Total price">
            {formatCurrency(totalPrice)}

            {hasBreakfast &&
              `(${formatCurrency(cabinPrice)} cabin + ${formatCurrency(
                extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{isPaid ? "Paid" : "Will pay at property"}</p>
        </Price>
      </Section>

      <Footer>
        <p>Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}</p>
      </Footer>
    </StyledBookingDataBox>
  );
}

export default BookingDataBox;
