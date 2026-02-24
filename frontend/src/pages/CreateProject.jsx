import { Button, Layout, Typography, ConfigProvider } from 'antd'
import { useCreateProject } from "../hooks/apis/mutations/useCreateProject"

const { Title } = Typography;

const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f9fafb',
    fontFamily: '"Bricolage Grotesque", sans-serif',
    padding: '24px'
}

const layoutStyle = {
    borderRadius: 16,
    overflow: 'hidden',
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.04)',
    border: '1px solid #f0f0f0',
}

const headerStyle = {
    textAlign: 'center',
    backgroundColor: 'transparent',
    padding: '48px 32px 16px',
    height: 'auto',
    lineHeight: 'normal'
}

const titleStyle = {
    margin: 0,
    fontWeight: 400,
    fontSize: '28px',
    letterSpacing: '-0.02em',
    color: '#111827'
}

const contentStyle = {
    textAlign: 'center',
    padding: '0 32px 48px',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px'
};

const buttonStyle = {
    height: '48px',
    padding: '0 32px',
    fontSize: '16px',
    fontWeight: 400,
    borderRadius: '8px',
    boxShadow: 'none'
};

export const CreateProject = () => {
    const { Header, Content } = Layout;
    const { createProjectMutation } = useCreateProject();

    async function handleCreateProject() {
        console.log('Going to trigger the api');
        try {
            await createProjectMutation();
            console.log('Now we should redirect to the editor');

        } catch (error) {
            console.log('Error creating project: ', error);
        }
    }

    return (
        <ConfigProvider theme={{
            token: {
                fontFamily: '"Bricolage Grotesque", sans-serif',
                colorPrimary: '#000000',
            }
        }}>
            <div style={containerStyle}>
                <Layout style={layoutStyle}>
                    <Header style={headerStyle}>
                        <Title level={1} style={titleStyle}>Create a Project</Title>
                    </Header>
                    <Content style={contentStyle}>
                        <p style={{ color: '#6b7280', margin: 0, fontSize: '15px' }}>
                            Start a new playground environment to write and run your code instantly.
                        </p>
                        <Button
                            type='primary'
                            style={buttonStyle}
                            onClick={handleCreateProject}
                        >
                            Create Playground
                        </Button>
                    </Content>
                </Layout>
            </div>
        </ConfigProvider>
    )
}