/**import { useState } from 'react';
import SectionHeader from './SectionHeader'
import GitHubCalendar from "react-github-calendar";



const GithubContributions = () => {
    const [contrubutionYear, setContributionYear] = useState(2026);

    return (
        <div id='GithubContributions'>
            <SectionHeader heading="Github Contribution" />
            <div id='contrubutionContainer'>
                <GitHubCalendar
                    username="ragini2467singhal"
                    showWeekdayLabels={true}
                    year={contrubutionYear}
                    blockSize={14}
                    blockMargin={4}
                    color="#00ff99"
                    fontSize={14}
                    colorScheme="dark"
                    style={{ zIndex: "99" }}
                />
                <div className='selectYear'>
                    {
                        [2026, 2025].map((year) => <button
                            key={year}
                            className={year === contrubutionYear ? "active" : ""}
                            onClick={() => setContributionYear(year)}>
                            {year}
                        </button>)
                    }
                </div>
            </div>


        </div>
    )
}

export default GithubContributions**/
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import GitHubCalendar from "react-github-calendar";

const GithubContributions = () => {
  const [contributionYear, setContributionYear] = useState(2026);

  return (
    <div id="GithubContributions">
      <SectionHeader heading="GitHub Contributions" />

      <div id="contrubutionContainer">
        <GitHubCalendar
          username="ragini2467singhal"
          showWeekdayLabels={true}
          year={contributionYear}
          blockSize={14}
          blockMargin={4}
          color="#00ff99"
          fontSize={14}
          colorScheme="dark"
          style={{ zIndex: "99" }}
        />

        <div className="selectYear">
          {[2026, 2025].map((year) => (
            <button
              key={year}
              className={year === contributionYear ? "active" : ""}
              onClick={() => setContributionYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubContributions;