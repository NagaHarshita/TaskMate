import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './CSS/Sidebar.css'
import Sidebar from './Sidebar';
import './CSS/layout.css';
import Graph from './Graph'
import Todo from './Todo';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Lessons from './upcomingLessons';

const { Header, Content } = Layout;

function Main(){
    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: '#FFF1ED',
        },
      }));
    const classes = useStyles();
    return (
      <Layout>


        <Sidebar/>

          <Header className="site-layout-background" style={{ padding: 0 }}>
              
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
            //   minHeight: 1280,
            }}
          >

            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                    <div className="sections">
                        <Lessons/>
                    </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="sections">
                          <Todo/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="sections">
                        <h1 >Leader Board</h1>
                        <p> electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </Grid>
                </Grid>
                <div> </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <div className="sections">
                        <h1 >Courses</h1>
                        <Grid container spacing={3}>
                            <Grid item xs>
                                <div>
                                    <h2>Maths</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing electronic typesetting, remaining essentially unchanged.</p>
                                </div>
                            </Grid>
                            <Grid item xs>
                                <div>
                                    <h2>Physics</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing electronic typesetting, remaining essentially unchanged. </p>
                                </div>
                            </Grid>
                        </Grid>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className="sections">
                        <h1 >Homework</h1>
                        <p>  with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </Grid>
                    <Grid item xs>
                        <div className="sections">
                        <h1 >Graph</h1>
                        <Graph/>
                        </div>
                    </Grid>
                </Grid>
                
            </div>


          </Content>
        
      </Layout>
    );
  
}

export default Main;


