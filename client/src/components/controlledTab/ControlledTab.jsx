import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';
import "./ControlledTab.css"
export default function BasicDemo() {
    const renderTabContent = (headerText) => {
        switch (headerText) {
            case "Feasibility Assessments":
                return (
                    <>
                    <h4>Feasibility Assessments</h4>
                    <p className="m-0">
                    Embarking on AI endeavors without assessing their feasibility can result in wasted resources without tangible outcomes. Alinspace AI's Feasibility Assessments offer a meticulous evaluation of proposed AI initiatives, ensuring they are built on a solid groundwork of practicality, viability, and potential ROI
                    </p>
                    <p>With a meticulous approach, our consultants evaluate the technical, operational, and financial aspects of your AI aspirations. This comprehensive assessment ensures that every AI project you undertake is actionable and aligns with your business's infrastructure, goals, and resources.</p>
                    </>
                );
            case "Strategy Development":
                return (
                    <>
                    <h4>Strategy Development</h4>
                    <p className="m-0">
                        At Alinspace AI, we leverage deep industry knowledge and cutting-edge insights to architect a coherent, actionable AI strategy tailored for your business. We understand that every enterprise has unique goals, challenges, and landscapes; our strategy development is designed to reflect that individuality.
                    </p>
                    <p>We don't just skim the surface; our consultants dive deep into your organization's DNA, understanding its intricacies to pinpoint where AI can be a game-changer. From ideation to blueprinting, our strategy development process is a meticulous blend of your vision and our expertise.</p>
                    </>
                );
            case "Performance Evaluation":
                return (
                    <>
                    <h4>Performance Evaluation</h4>
                    <p className="m-0">
                    In the realm of AI-driven enterprises, the maxim "what gets measured gets managed" has never been more pertinent. Alinspace AI's Performance Evaluation service offers a comprehensive assessment of your AI initiatives, ensuring they deliver tangible results and are in alignment with set benchmarks.
                    </p>
                    <p>Understanding the impact of AI solutions isn't just about number-crunching; it's about discerning the nuances that drive those numbers.With our seasoned consultants, we delve into both qualitative and quantitative metrics, providing a holistic view of your AI implementations. Whether it's the efficiency of an algorithm, the accuracy of predictions, or the tangible business outcomes achieved, we meticulously evaluate every facet.</p>
                    </>
                );
            case "Use Case Identification":
                return (
                    <>
                    <h4>Use Case Identification</h4>
                    <p className="m-0">
                    Alinspace AI’s Use Case Identification service is a specialized approach to uncover the most potent AI applications tailored for your enterprise. We believe in harnessing AI where it matters most, transforming potential into palpable impact.
                    </p>
                    <p>Our  consultants engage in a deep-dive analysis of your organization's operations, culture, and aspirations. By weaving together this understanding with our vast knowledge of AI advancements, we illuminate AI opportunities that resonate with your business objectives and industry dynamics.</p>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="">
            <TabView>
                <TabPanel header="Feasibility Assessments">
                    {renderTabContent("Feasibility Assessments")}
                </TabPanel>
                <TabPanel header="Strategy Development">
                    {renderTabContent("Strategy Development")}
                </TabPanel>
                <TabPanel header="Performance Evaluation">
                    {renderTabContent("Performance Evaluation")}
                </TabPanel>
                <TabPanel header="Use Case Identification">
                    {renderTabContent("Use Case Identification")}
                </TabPanel>
            </TabView>
        </div>
    );
}
