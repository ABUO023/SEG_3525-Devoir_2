"use client";

import { useState } from "react";
import { ArrowRight, Bike, CalendarCheck, Clock3, MapPin } from "lucide-react";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const shortMonthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdayTimes = ["09:00", "10:30", "11:00", "14:00", "15:30", "16:00"];
const saturdayTimes = ["09:30", "11:00", "13:00"];
const initialDate = new Date(2026, 9, 7);

function sameDay(first: Date, second: Date) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

function getDaysForMonth(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const leadingDays = (firstDay + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPreviousMonth = new Date(year, month, 0).getDate();
  const cells = [];

  for (let index = leadingDays - 1; index >= 0; index -= 1) {
    const day = daysInPreviousMonth - index;
    cells.push({ date: new Date(year, month - 1, day), inMonth: false });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push({ date: new Date(year, month, day), inMonth: true });
  }

  const trailingDays = 42 - cells.length;

  for (let day = 1; day <= trailingDays; day += 1) {
    cells.push({ date: new Date(year, month + 1, day), inMonth: false });
  }

  return cells;
}

function getAvailableTimes(date: Date) {
  if (date.getDay() === 0) {
    return [];
  }

  if (date.getDay() === 6) {
    return saturdayTimes;
  }

  return weekdayTimes;
}

function formatDate(date: Date) {
  return `${shortMonthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

function formatShortDate(date: Date) {
  return `${shortMonthNames[date.getMonth()]} ${date.getDate()}`;
}

function formatTime(time: string) {
  const [hourValue, minute] = time.split(":");
  const hour = Number(hourValue);
  const suffix = hour >= 12 ? "PM" : "AM";
  const displayHour = hour % 12 === 0 ? 12 : hour % 12;

  return `${displayHour}:${minute} ${suffix}`;
}

export function BookingCalendar() {
  const [viewDate, setViewDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [selectedTime, setSelectedTime] = useState("11:00");

  const visibleDays = getDaysForMonth(viewDate.getFullYear(), viewDate.getMonth());
  const availableTimes = getAvailableTimes(selectedDate);
  const selectedDisplayDate = formatDate(selectedDate);
  const selectedDisplayTime = selectedTime ? formatTime(selectedTime) : "Choose a time";
  const bookingSubject = encodeURIComponent("VeloVite booking request");
  const bookingBody = encodeURIComponent(
    `I would like to book the Commuter Tune Package on ${selectedDisplayDate} at ${selectedDisplayTime}.`
  );
  const bookingMailTo = `mailto:hello@velovite.example?subject=${bookingSubject}&body=${bookingBody}`;

  function changeMonth(direction: number) {
    setViewDate((current) => new Date(current.getFullYear(), current.getMonth() + direction, 1));
  }

  function selectDate(date: Date) {
    const nextTimes = getAvailableTimes(date);

    setSelectedDate(date);
    setSelectedTime((current) => (nextTimes.includes(current) ? current : nextTimes[0] ?? ""));
  }

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_390px]">
      <div className="grid gap-6">
        <div className="rounded-[2rem] border border-[#dde5df] border-t-4 border-t-[#007a74] bg-white p-6 shadow-xl shadow-[#23342f]/5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="flex items-center gap-3 text-2xl font-black">
              <CalendarCheck className="size-6 text-[#007a74]" /> {monthNames[viewDate.getMonth()]} {viewDate.getFullYear()}
            </h3>
            <div className="flex gap-2 text-xl font-black">
              <button
                aria-label="Show previous month"
                className="rounded-full px-3 py-1 transition hover:bg-[#eef4ef]"
                onClick={() => changeMonth(-1)}
                type="button"
              >
                ‹
              </button>
              <button
                aria-label="Show next month"
                className="rounded-full px-3 py-1 transition hover:bg-[#eef4ef]"
                onClick={() => changeMonth(1)}
                type="button"
              >
                ›
              </button>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-7 gap-2 text-center text-sm font-black uppercase tracking-wider text-[#6b726e]">
            {weekDays.map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-7 gap-2 text-center text-lg">
            {visibleDays.map(({ date, inMonth }) => {
              const selected = sameDay(date, selectedDate);
              const closed = date.getDay() === 0;
              const key = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

              return (
                <button
                  aria-label={`${formatDate(date)}${closed ? " closed" : ""}`}
                  aria-pressed={selected}
                  className={`rounded-xl py-3 text-sm font-bold transition sm:py-4 sm:text-lg ${
                    selected
                      ? "border-2 border-[#dfff2f] bg-[#e6ff2f] text-[#171d1c] shadow-[0_3px_0_#171d1c]"
                      : "hover:bg-[#f1f6f2]"
                  } ${!inMonth ? "text-[#b9bfbb]" : ""} ${closed ? "cursor-not-allowed opacity-35" : ""}`}
                  disabled={closed}
                  key={key}
                  onClick={() => selectDate(date)}
                  type="button"
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
          <p className="mt-5 text-sm font-semibold text-[#68716c]">Sundays are closed. Adjacent-month dates are selectable for quick booking.</p>
        </div>

        <div className="rounded-[2rem] border border-[#dde5df] border-t-4 border-t-[#007a74] bg-white p-6 shadow-xl shadow-[#23342f]/5 sm:p-8">
          <h3 className="flex items-center gap-3 text-2xl font-black">
            <Clock3 className="size-6 text-[#007a74]" /> Available times for {formatShortDate(selectedDate)}
          </h3>
          {availableTimes.length > 0 ? (
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {availableTimes.map((time) => {
                const selected = time === selectedTime;

                return (
                  <button
                    aria-pressed={selected}
                    className={`rounded-xl border px-5 py-4 text-base font-black transition hover:border-[#007a74] ${
                      selected ? "border-[#171d1c] bg-[#e6ff2f] text-[#171d1c] shadow-[0_4px_0_#171d1c]" : "border-[#d9e1dc] bg-white"
                    }`}
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    type="button"
                  >
                    {formatTime(time)}
                  </button>
                );
              })}
            </div>
          ) : (
            <p className="mt-7 rounded-xl bg-[#f2f3ef] p-5 font-bold text-[#59615d]">The shop is closed on this date. Pick another day to see appointment times.</p>
          )}
        </div>
      </div>

      <aside className="rounded-[2rem] bg-white shadow-2xl shadow-[#23342f]/10 ring-1 ring-[#dde5df]">
        <div className="rounded-t-[2rem] bg-[#007a74] p-7 text-white">
          <h3 className="text-2xl font-black">Booking Summary</h3>
        </div>
        <div className="p-7">
          <div className="flex gap-4 border-b border-[#d9e1dc] pb-6">
            <div className="flex size-16 items-center justify-center rounded-xl bg-[#171d1c] text-[#dfff2f]">
              <Bike className="size-8" />
            </div>
            <div>
              <p className="font-black text-[#596800]">Commuter Tune Package</p>
              <p className="mt-1 text-sm font-semibold leading-5 text-[#59615d]">Includes brake alignment, drivetrain clean, and safety check.</p>
            </div>
          </div>
          <dl className="mt-6 space-y-4 text-sm">
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#59615d]"><CalendarCheck className="size-4" /> Date</dt>
              <dd className="font-black">{selectedDisplayDate}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#59615d]"><Clock3 className="size-4" /> Time</dt>
              <dd className="font-black">{selectedDisplayTime}</dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="flex items-center gap-2 text-[#59615d]"><MapPin className="size-4" /> Shop</dt>
              <dd className="font-black">Central Hub</dd>
            </div>
          </dl>
          <div className="mt-7 rounded-xl border-l-4 border-[#596800] bg-[#fcffe7] p-5">
            <div className="flex items-end justify-between gap-4">
              <p className="text-sm font-black">Estimated Cost</p>
              <p className="text-3xl font-black text-[#596800]">$85</p>
            </div>
          </div>
          <a
            aria-disabled={!selectedTime}
            className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl px-6 py-5 text-lg font-black text-white shadow-[0_5px_0_#171d1c] transition hover:-translate-y-0.5 ${
              selectedTime ? "bg-[#596800]" : "pointer-events-none bg-[#a2aaa5]"
            }`}
            href={bookingMailTo}
          >
            Confirm Appointment <ArrowRight className="size-5" />
          </a>
          <p className="mt-4 text-center text-xs leading-5 text-[#7b837f]">No payment required until service is complete.</p>
        </div>
      </aside>
    </div>
  );
}
