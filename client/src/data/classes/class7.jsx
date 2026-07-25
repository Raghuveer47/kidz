import { commandPromptTopic } from './class7CommandPromptTopics';
import { msWordFourTopics } from './class7MsWordFourTopics';
import { pptTwoTopics } from './class7PptTwoTopics';
import { flowchartsTopic } from './class7FlowchartsTopics';
import { pythonOneTopics } from './class7PythonOneTopics';
import { internetOneTopics } from './class7InternetOneTopics';
import { htmlOneTopics } from './class7HtmlOneTopics';
import { aiFourTopics } from './class7AiFourTopics';
import { class7SummaryQuizTopics } from './class7SummaryQuizTopics';

export const class7Data = {
    className: 'Class 7',
    topics: [
        commandPromptTopic,
        ...msWordFourTopics,
        ...pptTwoTopics,
        flowchartsTopic,
        ...pythonOneTopics,
        ...internetOneTopics,
        ...htmlOneTopics,
        ...aiFourTopics,
        ...class7SummaryQuizTopics,
    ],
};
