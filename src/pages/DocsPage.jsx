import Box from "../components/Box";
import "../styles/docs_page.scss"

const DocsPage = () => {
    return (
        <main className="docs-page">
            <Box height={50} />
            <h1>Documentation</h1>
            <Box height={40} />
            <h2>Introduction</h2>
            <hr></hr>
            {/* <Box height={20} /> */}
            <p>Refi, (Reputation + Finance) is a variable interest rate lending and borrowing protocol that
                maintains a credit score for its users and provides benefits to them accordingly. It also issues
                on-chain credit cards to users for easy external payments. Refi takes its core functionality
                from AAVE v2.
            </p>

            <Box height={30} />
            <h2>Terminologies</h2>
            <hr></hr>
            {/* <Box height={20} /> */}
            <p>Few of the core Terminologies used in Refi (or defi in general) are explained below</p>
            <Box height={20} />
            <ul>
                <li><strong>Collateral</strong> - The collateral is basically a security deposit,
                    which the protocol can claim if you fail to repay the loan. Loans in Refi are over-collateralized
                    i.e. you have to deposit more assets than you can borrow. Anything you deposit on the protocol
                    is automatically used as collateral to provide you additional borrowing capacity</li>
                <Box height={15} />
                <li><strong>LTV</strong> - LTV or Loan To Value ratio is the ratio of debt amount to the value of collateral deposited.
                    The LTV for individual asset is the percentage value of total collateral, that can be borrowed
                    in the that asset.
                </li>
                <Box height={15} />
                <li><strong>Liquidation Threshold</strong> - Due to market conditions, the ETH equivalent value
                    of the assets you borrowed and deposited will change. Liquidation Threshold is the
                    maximum ratio of borrowed value to deposited value, beyond which your loan is considered
                    as a "Default" and can be liquidated</li>
                <Box height={15} />
                <li><strong>Health Factor</strong> - Health factor is the ratio of maximum value allowed to borrow
                    to the value actually borrowed.</li>
                <Box height={15} />
                <li><strong>Liquidation</strong> - In the event of a negative price fluctuation of the
                    debt asset (i.e. Health Factor falls below 1), a loan can be liquidated.
                    Anyone can repay the debt and claim the collateral + extra bonus of the defaulter.</li>
                <Box height={15} />
                <li><strong>Liquidation Penalty</strong> - When a liquidator liquidates a debt of a borrower,
                    they pay the user's debt and recieve equivalent amount of user's collateal + some extra
                    percentage of the collateral i.e. Liquidation Penalty
                </li>
                <Box height={15} />
                <li><strong>Deposit APY</strong> - Deposit Annual Percentage Yield is the interest in percentage terms that
                    can be earned on deposited asset in a year, if the current state of the protocol persists.
                </li>
                <Box height={15} />
                <li><strong>Borrow APY</strong> - Borrow Annual Percentage Yield is the interest in percentage terms that
                    that has to be paid on borrowed asset in a year, if the current state of the protocol persists.
                </li>
                <Box height={15} />
                <li><strong>Percentage Utilization</strong> - Ratio of total amount borrowed to the total amount
                    supplied in an asset.</li>
                <Box height={15} />
                <li><strong>Variable Interest Rate</strong> - Refi is a variable interest rate based protocol i.e. Deposit and Borrow APYs are adjusted
                    after every transaction depending on the total amount supplied in asset and amount borrowed in asset.</li>
            </ul>

            <Box height={30} />

            <h2>Credit Scores</h2>
            <hr></hr>
            {/* <Box height={20} /> */}
            <p>Your credit score is a number between 300–900 that represents your creditworthiness.
                The higher the score, the higher you can borrow against the deposited collateral. </p>
            <Box height={20} />

            <h3>Factors used in calculating credit score</h3>
            <Box height={20} />

            <p>We analyzed exisiting credit scoring models like FICO and Vantagescore for
                the factors they use for calculating credit score. Based on that, we have identified the
                following 3 highest impact factors and used them in Defi perspective as follows:
            </p>
            <Box height={15} />
            <p><strong>1. &nbsp;Payment history</strong> - It tracks your borrowing history and takes into account, the liquidations that occur.
                Maintain your loan without any Liquidation to have a good credit score. Every time you liquidate,
                your credit score drops by 50-200 points depending on your current score.
            </p>
            <Box height={15} />
            <p><strong>2. &nbsp;Credit utilization</strong> - It is the percentage of the amount you have borrowed
                with respect to the maximum amount you are allowed to borrow. Credit utilization of 85% is considered
                optimal and results in fastest increase in credit score over time. The rate of increase of credit score
                increases with credit utilization till 85% and falls after that since borrowing any more is considered riskier.</p>
            <Box height={15} />
            <p><strong>3. &nbsp;Credit history</strong> - It is the time period over which you have maintained your borrowed loan.
                Borrowing any amount results in continuous increase of credit score with time. The rate of increase however
                is determined by Credit utilization.
            </p>

            <Box height={30} />

            <h2>User Classes and their Features</h2>
            <hr></hr>
            {/* <Box height={20} /> */}
            <p>Users are divided into following 4 classes based on their current credit score.</p>
            <Box height={5} />
            <p>Features of these classes are designed with respect to an "Ideal user"</p>
            <Box height={5} />

            <p><strong>Ideal user</strong> - A user who maintains the optimal credit
                utilization of 85% consistently without liquidating ever. </p>

            <Box height={20} />
            <h3>Bronze</h3>
            <Box height={15} />
            <ul>
                <li>Credit score range - 300 to 600</li>
                <li>It takes about 3 months for an ideal user to reach from a score of 300 to 600.</li>
                <li>Any liquidation in this class would result in decrease in credit score by 50.</li>
            </ul>

            <Box height={20} />
            <h3>Silver</h3>
            <Box height={15} />
            <ul>
                <li>Credit score range - 600 to 700</li>
                <li>It takes about 9 months for an ideal user to reach from a score of 600 to 700.</li>
                <li>Any liquidation in this class would result in decrease in credit score by 100.</li>
            </ul>

            <Box height={20} />
            <h3>Gold</h3>
            <Box height={15} />
            <ul>
                <li>Credit score range - 700 to 800</li>
                <li>It takes about 1 year for an ideal user to reach from a score of 700 to 800.</li>
                <li>Any liquidation in this class would result in decrease in credit score by 150.</li>
            </ul>

            <Box height={20} />
            <h3>Platinum</h3>
            <Box height={15} />
            <ul>
                <li>Credit score range - 800 to 900</li>
                <li>It takes about 10 years for an ideal user to reach from a score of 800 to 900.</li>
                <li>Any liquidation in this class would result in decrease in credit score by 200.</li>
            </ul>
            <section id="benefits">
                <Box height={30} />
                <h2>Benefits</h2>
                <Box height={20} />
                <table>
                    <thead>
                        <tr>
                            <th rowSpan={2} colSpan={2} className="large">User Class</th>
                            <th colSpan={2} className="large">ETH</th>
                            <th colSpan={2} className="large">DAI</th>
                            <th colSpan={2} className="large">LINK</th>
                        </tr>
                        <tr>
                            <th className="sub">LTV</th>
                            <th className="sub">Threshold</th>
                            <th className="sub">LTV</th>
                            <th className="sub">Threshold</th>
                            <th className="sub">LTV</th>
                            <th className="sub">Threshold</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan={2}>Bronze</td>
                            <td>70%</td>
                            <td>75%</td>
                            <td>70%</td>
                            <td>75%</td>
                            <td>70%</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Silver</td>
                            <td>75%</td>
                            <td>80%</td>
                            <td>75%</td>
                            <td>80%</td>
                            <td>75%</td>
                            <td>80%</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Gold</td>
                            <td>80%</td>
                            <td>85%</td>
                            <td>80%</td>
                            <td>85%</td>
                            <td>80%</td>
                            <td>85%</td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Platinum</td>
                            <td>85%</td>
                            <td>90%</td>
                            <td>85%</td>
                            <td>90%</td>
                            <td>85%</td>
                            <td>90%</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <Box height={30} />
            <h2>Credit Card</h2>
            <hr></hr>
            {/* <Box height={20} /> */}
            <p>Users can get their Refi credit card by minting it as an NFT from their Dashboard. The card is a dynamic NFT i.e. it automatically changes its
                color, metadata and benefits when a user's class is changed due to a change in their credit score. There are four versions of the credit card i.e.
                Bronze, Silver, Gold and Platinum for the respective classes.</p>
            <Box height={10} />
            <p>
                The Refi credit card can be used to pay on any Dapp supporting Refi payments or to send funds to any address.
                This allows users to pay in any token without holding it or swapping existing ones for it.
                This is achieved by creating a borrow position of equivalent amount on user's behalf on the Refi protocol.
                Users can later repay their credit card debt on the protocol.
            </p>

            <Box height={10} />
            <p>Dapps can integrate Refi credit card payments using our "Pay with Refi" widget.
                It supports payments in multiple tokens and also provides borrow limit for users.
                This would allow the Dapp to recieve payments from users through their Refi card.
            </p>

            <Box height={100} />
        </main>
    );
}

export default DocsPage;