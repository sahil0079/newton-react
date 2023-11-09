
const PROJECT_ID = '8nbih316dv01';


export function getHeaderWithProjectId() {
    return {
        headers: { projectId: PROJECT_ID }
    }
};

export function getHeaderWithProjectIdAndBody() {
    return {
        projectId: PROJECT_ID,
        'Content-Type': 'application/json',
    }
};