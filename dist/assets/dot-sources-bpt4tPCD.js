function t(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Customer of the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    cloud [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#eff6ff">Cloud System</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#bfdbfe">Our SaaS platfrom that allows</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#bfdbfe">customers to interact with</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#bfdbfe">the latest technologies</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=cloud,
        likec4_level=0];
    customer -> cloud [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">uses and pays</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:cloud",
        minlen=1,
        style=dashed];
    aws [fillcolor="#A35829",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="40"><TABLE FIXEDSIZE="TRUE" BGCOLOR="#11223300" WIDTH="40" HEIGHT="40" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD> </TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#FFE0C2">Amazon Web Services</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#FFA057">Cloud Infrastructure and</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#FFA057">Managed Services</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=aws,
        likec4_level=0];
    cloud -> aws [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">uses services</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud:aws",
        minlen=1,
        style=dashed];
}
`;case"cloud":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_cloud {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            fontcolor="#c2f0c2b3",
            label=<<B>CLOUD SYSTEM</B>>,
            likec4_depth=1,
            likec4_id=cloud,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui [fillcolor="#428a4f",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">All the frontend applications of the cloud</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="cloud.ui",
            likec4_level=1,
            margin="0.417,0.445"];
        backend [fillcolor="#428a4f",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Backend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">The backend services of the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1];
        ui -> backend [constraint=false,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">fetches data</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="cloud.ui:cloud.backend",
            minlen=1,
            style=dashed];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Customer of the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> ui [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">uses web and mobile</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:cloud.ui",
        minlen=1,
        style=dashed];
    aws [fillcolor="#A35829",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="40"><TABLE FIXEDSIZE="TRUE" BGCOLOR="#11223300" WIDTH="40" HEIGHT="40" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD> </TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#FFE0C2">Amazon Web Services</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#FFA057">Cloud Infrastructure and</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#FFA057">Managed Services</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=aws,
        likec4_level=0];
    ui -> aws [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">authenticates</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui:aws",
        style=dashed];
    backend -> aws [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><B><FONT POINT-SIZE="13">[...]</FONT></B></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws",
        style=dashed];
}
`;case"aws":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_cloud {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            fontcolor="#cbd5e1b3",
            label=<<B>CLOUD SYSTEM</B>>,
            likec4_depth=1,
            likec4_id=cloud,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        ui [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">All the frontend applications of the cloud</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="cloud.ui",
            likec4_level=1,
            margin="0.417,0.445"];
        backend [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Backend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">The backend services of the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1];
    }
    subgraph cluster_aws {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            fontcolor="#cbd5e1b3",
            label=<<B>AMAZON WEB SERVICES</B>>,
            likec4_depth=1,
            likec4_id=aws,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        cognito [fillcolor="#428a4f",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Cognito</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Provides user management and authentication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="aws.cognito",
            likec4_level=1];
        pg [color="#2d5d39",
            fillcolor="#428a4f",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="40"><TABLE FIXEDSIZE="TRUE" BGCOLOR="#11223300" WIDTH="40" HEIGHT="40" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD> </TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">PostgreSQL</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#c2f0c2">AWS Aurora PostgreSQL</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Database for storing relational data</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="aws.pg",
            likec4_level=1,
            margin="0.362,0.417",
            penwidth=2,
            shape=cylinder];
    }
    ui -> cognito [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">authenticates</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui:aws.cognito",
        minlen=1,
        style=dashed];
    backend -> cognito [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">authorizes</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.cognito",
        style=dashed];
    backend -> pg [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">reads/writes</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.pg",
        minlen=1,
        style=dashed];
}
`;case"aws_cognito":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_aws {
        graph [color="#462a17",
            fillcolor="#5a3620",
            fontcolor="#ffa057b3",
            label=<<B>AMAZON WEB SERVICES</B>>,
            likec4_depth=1,
            likec4_id=aws,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        cognito [fillcolor="#A35829",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#FFE0C2">Cognito</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#FFA057">Provides user management and authentication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="aws.cognito",
            likec4_level=1];
    }
    ui [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">All the frontend applications of the cloud</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui",
        likec4_level=0,
        margin="0.417,0.445"];
    ui -> cognito [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">authenticates</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui:aws.cognito",
        minlen=1,
        style=dashed];
    backend [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Backend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">The backend services of the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend",
        likec4_level=0];
    backend -> cognito [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">authorizes</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.cognito",
        minlen=1,
        style=dashed];
}
`;case"cloud_backend":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_backend {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            fontcolor="#c2f0c2b3",
            label=<<B>BACKEND</B>>,
            likec4_depth=1,
            likec4_id="cloud.backend",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        graphql [fillcolor="#428a4f",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">GraphQL API</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">The GraphQL API of the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="cloud.backend.graphql",
            likec4_level=1];
    }
    subgraph cluster_aws {
        graph [color="#3f2717",
            fillcolor="#51321f",
            fontcolor="#ffa057b3",
            label=<<B>AMAZON WEB SERVICES</B>>,
            likec4_depth=2,
            likec4_id=aws,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_pg {
            graph [color="#462a17",
                fillcolor="#5a3620",
                fontcolor="#ffa057b3",
                label=<<B>POSTGRESQL</B>>,
                likec4_depth=1,
                likec4_id="aws.pg",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            tbl_sessions [color="#7E451D",
                fillcolor="#A35829",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#FFE0C2">[ sessions ]</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#FFA057">&lt;&lt; private schema &gt;&gt;</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#FFA057">Active sessions of</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#FFA057">authenticated customers</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="aws.pg.tbl_sessions",
                likec4_level=2,
                margin="0.362,0.417",
                penwidth=2,
                shape=cylinder];
            tbl_customers [color="#7E451D",
                fillcolor="#A35829",
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#FFE0C2">[ customers ]</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#FFA057">&lt;&lt; private schema &gt;&gt;</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="aws.pg.tbl_customers",
                likec4_level=2,
                margin="0.362,0.417",
                penwidth=2,
                shape=cylinder];
            tbl_sessions -> tbl_customers [constraint=false,
                label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">references to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
                likec4_id="aws.pg.tbl_sessions:aws.pg.tbl_customers",
                style=solid];
        }
        cognito [fillcolor="#A35829",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#FFE0C2">Cognito</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#FFA057">Provides user management and authentication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="aws.cognito",
            likec4_level=1];
    }
    ui [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Frontend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">All the frontend applications of the cloud</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui",
        likec4_level=0,
        margin="0.417,0.445"];
    ui -> graphql [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">fetches data</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui:cloud.backend.graphql",
        style=dashed];
    ui -> cognito [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">authenticates</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui:aws.cognito",
        style=dashed];
    graphql -> cognito [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">authorizes</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend.graphql:aws.cognito",
        style=dashed];
    graphql -> tbl_sessions [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">reads/writes</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend.graphql:aws.pg.tbl_sessions",
        minlen=1,
        style=dashed];
    graphql -> tbl_customers [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">reads/writes</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend.graphql:aws.pg.tbl_customers",
        style=dashed];
}
`;case"aws_pg":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_cloud {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            fontcolor="#cbd5e1b3",
            label=<<B>CLOUD SYSTEM</B>>,
            likec4_depth=1,
            likec4_id=cloud,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        backend [fillcolor="#0284c7",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Backend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">The backend services of the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="cloud.backend",
            likec4_level=1];
    }
    subgraph cluster_pg {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            fontcolor="#cbd5e1b3",
            label=<<B>AWS - POSTGRESQL</B>>,
            likec4_depth=1,
            likec4_id="aws.pg",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        tbl_sessions [color="#2d5d39",
            fillcolor="#428a4f",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">[ sessions ]</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#c2f0c2">&lt;&lt; private schema &gt;&gt;</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Active sessions of</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">authenticated customers</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="aws.pg.tbl_sessions",
            likec4_level=1,
            margin="0.362,0.417",
            penwidth=2,
            shape=cylinder];
        tbl_customers [color="#2d5d39",
            fillcolor="#428a4f",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">[ customers ]</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#c2f0c2">&lt;&lt; private schema &gt;&gt;</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="aws.pg.tbl_customers",
            likec4_level=1,
            margin="0.362,0.417",
            penwidth=2,
            shape=cylinder];
        tbl_sessions -> tbl_customers [constraint=false,
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">references to</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="aws.pg.tbl_sessions:aws.pg.tbl_customers",
            style=solid];
    }
    backend -> tbl_sessions [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">reads/writes</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.pg.tbl_sessions",
        minlen=1,
        style=dashed];
    backend -> tbl_customers [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">reads/writes</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.pg.tbl_customers",
        style=dashed];
}
`;case"cloud_ui":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Helvetica,
        fontsize=13,
        labeljust=l,
        labelloc=t,
        layout=dot,
        nodesep=1.389,
        outputorder=nodesfirst,
        pack=180,
        packmode=array_3,
        pad=0.139,
        penwidth=1,
        rankdir=TB,
        ranksep=1.528,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Helvetica,
        fontsize=20,
        height=2.57,
        margin=0.362,
        penwidth=0,
        shape=rect,
        style="filled,rounded",
        width=4.584
    ];
    edge [color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Helvetica,
        fontsize=13,
        penwidth=2,
        style=""
    ];
    subgraph cluster_ui {
        graph [color="#1e3524",
            fillcolor="#2c4e32",
            fontcolor="#c2f0c2b3",
            label=<<B>FRONTEND</B>>,
            likec4_depth=1,
            likec4_id="cloud.ui",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        dashboard [fillcolor="#428a4f",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Customer Dashboard</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#c2f0c2">NextJS</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">Web application, that allows customers to</FONT></TD></TR><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">interact with the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="cloud.ui.dashboard",
            likec4_level=1,
            margin="0.417,0.445"];
        mobile [fillcolor="#428a4f",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f8fafc">Mobile App</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#c2f0c2">Flutter</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#c2f0c2">The mobile app of the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="cloud.ui.mobile",
            likec4_level=1];
    }
    subgraph cluster_aws {
        graph [color="#462a17",
            fillcolor="#5a3620",
            fontcolor="#ffa057b3",
            label=<<B>AMAZON WEB SERVICES</B>>,
            likec4_depth=1,
            likec4_id=aws,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        pg [color="#7E451D",
            fillcolor="#A35829",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD ALIGN="CENTER" HEIGHT="40"><TABLE FIXEDSIZE="TRUE" BGCOLOR="#11223300" WIDTH="40" HEIGHT="40" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD> </TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#FFE0C2">PostgreSQL</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="14"><FONT POINT-SIZE="12" COLOR="#FFA057">AWS Aurora PostgreSQL</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#FFA057">Database for storing relational data</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="aws.pg",
            likec4_level=1,
            margin="0.362,0.417",
            penwidth=2,
            shape=cylinder];
        cognito [fillcolor="#A35829",
            label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#FFE0C2">Cognito</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#FFA057">Provides user management and authentication</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
            likec4_id="aws.cognito",
            likec4_level=1];
    }
    customer [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Customer</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">Customer of the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0];
    customer -> dashboard [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">opens in browser</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:cloud.ui.dashboard",
        style=dashed];
    customer -> mobile [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">opens on mobile device</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="customer:cloud.ui.mobile",
        style=dashed];
    backend [fillcolor="#0284c7",
        label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="5"><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="25"><FONT POINT-SIZE="20" COLOR="#f0f9ff">Backend</FONT></TD></TR></TABLE></TD></TR><TR><TD><TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD VALIGN="BOTTOM" HEIGHT="18"><FONT POINT-SIZE="14" COLOR="#B6ECF7">The backend services of the cloud system</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend",
        likec4_level=0];
    backend -> pg [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">reads/writes</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.backend:aws.pg",
        minlen=1,
        style=dashed];
    dashboard -> backend [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">fetches data</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui.dashboard:cloud.backend",
        style=dashed];
    dashboard -> cognito [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">authenticates</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui.dashboard:aws.cognito",
        style=dashed];
    mobile -> backend [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">fetches data</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui.mobile:cloud.backend",
        style=dashed];
    mobile -> cognito [label=<<TABLE BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD WIDTH="2"></TD><TD><TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="0" CELLPADDING="0" CELLSPACING="0"><TR><TD ALIGN="LEFT" VALIGN="BOTTOM" HEIGHT="17"><FONT POINT-SIZE="13">authenticates</FONT></TD></TR></TABLE></TD></TR></TABLE>>,
        likec4_id="cloud.ui.mobile:aws.cognito",
        style=dashed];
}
`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="845pt"
 viewBox="0.00 0.00 350.06 845.14" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 835.13)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M318.05,-825.12C318.05,-825.12 12,-825.12 12,-825.12 6,-825.12 0,-819.12 0,-813.12 0,-813.12 0,-652.08 0,-652.08 0,-646.08 6,-640.08 12,-640.08 12,-640.08 318.05,-640.08 318.05,-640.08 324.05,-640.08 330.05,-646.08 330.05,-652.08 330.05,-652.08 330.05,-813.12 330.05,-813.12 330.05,-819.12 324.05,-825.12 318.05,-825.12"/>
<text text-anchor="start" x="121.68" y="-737.6" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Customer</text>
<text text-anchor="start" x="72.43" y="-712.8" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Customer of the cloud system</text>
</g>
<!-- cloud -->
<g id="node2" class="node">
<title>cloud</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="0" d="M318.05,-505.08C318.05,-505.08 12,-505.08 12,-505.08 6,-505.08 0,-499.08 0,-493.08 0,-493.08 0,-332.04 0,-332.04 0,-326.04 6,-320.04 12,-320.04 12,-320.04 318.05,-320.04 318.05,-320.04 324.05,-320.04 330.05,-326.04 330.05,-332.04 330.05,-332.04 330.05,-493.08 330.05,-493.08 330.05,-499.08 324.05,-505.08 318.05,-505.08"/>
<text text-anchor="start" x="102.78" y="-435.56" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff">Cloud System</text>
<text text-anchor="start" x="72.04" y="-410.76" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">Our SaaS platfrom that allows</text>
<text text-anchor="start" x="85.66" y="-392.76" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">customers to interact with</text>
<text text-anchor="start" x="95.37" y="-374.76" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#bfdbfe">the latest technologies</text>
</g>
<!-- aws -->
<g id="node3" class="node">
<title>aws</title>
<path fill="#a35829" stroke="#2563eb" stroke-width="0" d="M318.05,-185.04C318.05,-185.04 12,-185.04 12,-185.04 6,-185.04 0,-179.04 0,-173.04 0,-173.04 0,-12 0,-12 0,-6 6,0 12,0 12,0 318.05,0 318.05,0 324.05,0 330.05,-6 330.05,-12 330.05,-12 330.05,-173.04 330.05,-173.04 330.05,-179.04 324.05,-185.04 318.05,-185.04"/>
<polygon fill="none" stroke="none" points="145.02,-108.02 145.02,-148.02 185.02,-148.02 185.02,-108.02 145.02,-108.02"/>
<text text-anchor="start" x="145.02" y="-130.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="63.88" y="-84.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#ffe0c2">Amazon Web Services</text>
<text text-anchor="start" x="89.93" y="-59.22" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#ffa057">Cloud Infrastructure and</text>
<text text-anchor="start" x="107.05" y="-41.22" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#ffa057">Managed Services</text>
</g>
<!-- customer&#45;&gt;cloud -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;cloud</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M165.02,-640.46C165.02,-602.2 165.02,-557.49 165.02,-517.92"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="168.52,-518.01 165.02,-508.01 161.52,-518.01 168.52,-518.01"/>
<text text-anchor="start" x="175.02" y="-567.98" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">uses and pays</text>
</g>
<!-- cloud&#45;&gt;aws -->
<g id="edge2" class="edge">
<title>cloud&#45;&gt;aws</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M165.02,-320.42C165.02,-282.16 165.02,-237.45 165.02,-197.88"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="168.52,-197.97 165.02,-187.97 161.52,-197.97 168.52,-197.97"/>
<text text-anchor="start" x="175.02" y="-247.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">uses services</text>
</g>
</g>
</svg>
`;case"cloud":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="976pt" height="862pt"
 viewBox="0.00 0.00 976.02 861.74" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 851.73)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="8,-280.04 8,-568.68 948,-568.68 948,-280.04 8,-280.04"/>
<text text-anchor="start" x="16" y="-553.98" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#c2f0c2" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<!-- ui -->
<g id="node1" class="node">
<title>ui</title>
<path fill="#428a4f" stroke="#2563eb" stroke-width="0" d="M366.02,-505.08C366.02,-505.08 59.98,-505.08 59.98,-505.08 53.98,-505.08 47.98,-499.08 47.98,-493.08 47.98,-493.08 47.98,-332.04 47.98,-332.04 47.98,-326.04 53.98,-320.04 59.98,-320.04 59.98,-320.04 366.02,-320.04 366.02,-320.04 372.02,-320.04 378.02,-326.04 378.02,-332.04 378.02,-332.04 378.02,-493.08 378.02,-493.08 378.02,-499.08 372.02,-505.08 366.02,-505.08"/>
<text text-anchor="start" x="172.98" y="-426.56" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Frontend</text>
<text text-anchor="start" x="88.86" y="-401.76" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">All the frontend applications of the cloud</text>
<text text-anchor="start" x="190.83" y="-383.76" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">system</text>
</g>
<!-- backend -->
<g id="node2" class="node">
<title>backend</title>
<path fill="#428a4f" stroke="#2563eb" stroke-width="0" d="M896.02,-505.08C896.02,-505.08 589.98,-505.08 589.98,-505.08 583.98,-505.08 577.98,-499.08 577.98,-493.08 577.98,-493.08 577.98,-332.04 577.98,-332.04 577.98,-326.04 583.98,-320.04 589.98,-320.04 589.98,-320.04 896.02,-320.04 896.02,-320.04 902.02,-320.04 908.02,-326.04 908.02,-332.04 908.02,-332.04 908.02,-493.08 908.02,-493.08 908.02,-499.08 902.02,-505.08 896.02,-505.08"/>
<text text-anchor="start" x="704.08" y="-417.56" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Backend</text>
<text text-anchor="start" x="612.66" y="-392.76" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">The backend services of the cloud system</text>
</g>
<!-- customer -->
<g id="node3" class="node">
<title>customer</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M366.02,-841.72C366.02,-841.72 59.98,-841.72 59.98,-841.72 53.98,-841.72 47.98,-835.72 47.98,-829.72 47.98,-829.72 47.98,-668.68 47.98,-668.68 47.98,-662.68 53.98,-656.68 59.98,-656.68 59.98,-656.68 366.02,-656.68 366.02,-656.68 372.02,-656.68 378.02,-662.68 378.02,-668.68 378.02,-668.68 378.02,-829.72 378.02,-829.72 378.02,-835.72 372.02,-841.72 366.02,-841.72"/>
<text text-anchor="start" x="169.66" y="-754.2" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Customer</text>
<text text-anchor="start" x="120.41" y="-729.4" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Customer of the cloud system</text>
</g>
<!-- aws -->
<g id="node4" class="node">
<title>aws</title>
<path fill="#a35829" stroke="#2563eb" stroke-width="0" d="M631.02,-185.04C631.02,-185.04 324.98,-185.04 324.98,-185.04 318.98,-185.04 312.98,-179.04 312.98,-173.04 312.98,-173.04 312.98,-12 312.98,-12 312.98,-6 318.98,0 324.98,0 324.98,0 631.02,0 631.02,0 637.02,0 643.02,-6 643.02,-12 643.02,-12 643.02,-173.04 643.02,-173.04 643.02,-179.04 637.02,-185.04 631.02,-185.04"/>
<polygon fill="none" stroke="none" points="458,-108.02 458,-148.02 498,-148.02 498,-108.02 458,-108.02"/>
<text text-anchor="start" x="458" y="-130.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="376.85" y="-84.02" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#ffe0c2">Amazon Web Services</text>
<text text-anchor="start" x="402.9" y="-59.22" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#ffa057">Cloud Infrastructure and</text>
<text text-anchor="start" x="420.02" y="-41.22" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#ffa057">Managed Services</text>
</g>
<!-- ui&#45;&gt;backend -->
<g id="edge1" class="edge">
<title>ui&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M377.79,-412.56C437.37,-412.56 504.87,-412.56 565.49,-412.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="565.28,-416.06 575.28,-412.56 565.28,-409.06 565.28,-416.06"/>
<text text-anchor="start" x="445.59" y="-423.46" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- ui&#45;&gt;aws -->
<g id="edge3" class="edge">
<title>ui&#45;&gt;aws</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M288.94,-320.42C321.65,-281.17 360.02,-235.12 393.61,-194.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="396.17,-197.19 399.88,-187.27 390.79,-192.71 396.17,-197.19"/>
<text text-anchor="start" x="363" y="-247.94" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">authenticates</text>
</g>
<!-- backend&#45;&gt;aws -->
<g id="edge4" class="edge">
<title>backend&#45;&gt;aws</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M667.06,-320.42C634.35,-281.17 595.98,-235.12 562.39,-194.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="565.21,-192.71 556.12,-187.27 559.83,-197.19 565.21,-192.71"/>
<text text-anchor="start" x="628" y="-248.94" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#c6c6c6">[...]</text>
</g>
<!-- customer&#45;&gt;ui -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;ui</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M213,-656.76C213,-613.78 213,-562.33 213,-517.85"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="216.5,-517.92 213,-507.92 209.5,-517.92 216.5,-517.92"/>
<text text-anchor="start" x="223" y="-584.58" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">uses web and mobile</text>
</g>
</g>
</svg>
`;case"aws":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="898pt" height="727pt"
 viewBox="0.00 0.00 898.02 727.12" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 717.11)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#3e4651" stroke="#2d333d" points="19,-410.47 19,-699.11 859,-699.11 859,-410.47 19,-410.47"/>
<text text-anchor="start" x="27" y="-684.41" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_aws</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-8 8,-362.47 870,-362.47 870,-8 8,-8"/>
<text text-anchor="start" x="16" y="-347.77" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">AMAZON WEB SERVICES</text>
</g>
<!-- ui -->
<g id="node1" class="node">
<title>ui</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M377.02,-635.51C377.02,-635.51 70.98,-635.51 70.98,-635.51 64.98,-635.51 58.98,-629.51 58.98,-623.51 58.98,-623.51 58.98,-462.47 58.98,-462.47 58.98,-456.47 64.98,-450.47 70.98,-450.47 70.98,-450.47 377.02,-450.47 377.02,-450.47 383.02,-450.47 389.02,-456.47 389.02,-462.47 389.02,-462.47 389.02,-623.51 389.02,-623.51 389.02,-629.51 383.02,-635.51 377.02,-635.51"/>
<text text-anchor="start" x="183.98" y="-556.99" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Frontend</text>
<text text-anchor="start" x="99.86" y="-532.19" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">All the frontend applications of the cloud</text>
<text text-anchor="start" x="201.83" y="-514.19" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">system</text>
</g>
<!-- backend -->
<g id="node2" class="node">
<title>backend</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M807.02,-635.51C807.02,-635.51 500.98,-635.51 500.98,-635.51 494.98,-635.51 488.98,-629.51 488.98,-623.51 488.98,-623.51 488.98,-462.47 488.98,-462.47 488.98,-456.47 494.98,-450.47 500.98,-450.47 500.98,-450.47 807.02,-450.47 807.02,-450.47 813.02,-450.47 819.02,-456.47 819.02,-462.47 819.02,-462.47 819.02,-623.51 819.02,-623.51 819.02,-629.51 813.02,-635.51 807.02,-635.51"/>
<text text-anchor="start" x="615.08" y="-547.99" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Backend</text>
<text text-anchor="start" x="523.66" y="-523.19" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">The backend services of the cloud system</text>
</g>
<!-- cognito -->
<g id="node3" class="node">
<title>cognito</title>
<path fill="#428a4f" stroke="#2563eb" stroke-width="0" d="M387.82,-265.95C387.82,-265.95 60.18,-265.95 60.18,-265.95 54.18,-265.95 48.18,-259.95 48.18,-253.95 48.18,-253.95 48.18,-92.91 48.18,-92.91 48.18,-86.91 54.18,-80.91 60.18,-80.91 60.18,-80.91 387.82,-80.91 387.82,-80.91 393.82,-80.91 399.82,-86.91 399.82,-92.91 399.82,-92.91 399.82,-253.95 399.82,-253.95 399.82,-259.95 393.82,-265.95 387.82,-265.95"/>
<text text-anchor="start" x="189.53" y="-178.43" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Cognito</text>
<text text-anchor="start" x="79.24" y="-153.63" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Provides user management and authentication</text>
</g>
<!-- pg -->
<g id="node4" class="node">
<title>pg</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M830.02,-276.06C830.02,-288.64 756.06,-298.87 665,-298.87 573.94,-298.87 499.98,-288.64 499.98,-276.06 499.98,-276.06 499.98,-70.81 499.98,-70.81 499.98,-58.22 573.94,-48 665,-48 756.06,-48 830.02,-58.22 830.02,-70.81 830.02,-70.81 830.02,-276.06 830.02,-276.06"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M830.02,-276.06C830.02,-263.48 756.06,-253.25 665,-253.25 573.94,-253.25 499.98,-263.48 499.98,-276.06"/>
<polygon fill="none" stroke="none" points="645,-189.63 645,-229.63 685,-229.63 685,-189.63 645,-189.63"/>
<text text-anchor="start" x="645" y="-211.63" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="610.53" y="-165.63" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">PostgreSQL</text>
<text text-anchor="start" x="597.31" y="-143.83" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">AWS Aurora PostgreSQL</text>
<text text-anchor="start" x="556.05" y="-121.43" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Database for storing relational data</text>
</g>
<!-- ui&#45;&gt;cognito -->
<g id="edge1" class="edge">
<title>ui&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M224,-450.66C224,-398.5 224,-332.9 224,-278.73"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="227.5,-278.96 224,-268.96 220.5,-278.96 227.5,-278.96"/>
<text text-anchor="start" x="234" y="-378.37" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">authenticates</text>
</g>
<!-- backend&#45;&gt;cognito -->
<g id="edge2" class="edge">
<title>backend&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M547.16,-450.66C484.46,-397.07 405.17,-329.3 340.83,-274.29"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="343.22,-271.73 333.34,-267.9 338.67,-277.05 343.22,-271.73"/>
<text text-anchor="start" x="487" y="-378.37" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">authorizes</text>
</g>
<!-- backend&#45;&gt;pg -->
<g id="edge3" class="edge">
<title>backend&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M656.73,-450.66C657.98,-408.97 659.49,-358.71 660.87,-312.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="664.36,-312.77 661.16,-302.67 657.36,-312.56 664.36,-312.77"/>
<text text-anchor="start" x="668" y="-378.37" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">reads/writes</text>
</g>
</g>
</svg>
`;case"aws_cognito":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="590pt"
 viewBox="0.00 0.00 780.06 589.70" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 579.69)">
<g id="clust1" class="cluster">
<title>cluster_aws</title>
<polygon fill="#5a3620" stroke="#462a17" points="164.02,-8 164.02,-296.64 596.02,-296.64 596.02,-8 164.02,-8"/>
<text text-anchor="start" x="172.02" y="-281.94" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#ffa057" fill-opacity="0.701961">AMAZON WEB SERVICES</text>
</g>
<!-- cognito -->
<g id="node1" class="node">
<title>cognito</title>
<path fill="#a35829" stroke="#2563eb" stroke-width="0" d="M543.85,-233.04C543.85,-233.04 216.2,-233.04 216.2,-233.04 210.2,-233.04 204.2,-227.04 204.2,-221.04 204.2,-221.04 204.2,-60 204.2,-60 204.2,-54 210.2,-48 216.2,-48 216.2,-48 543.85,-48 543.85,-48 549.85,-48 555.85,-54 555.85,-60 555.85,-60 555.85,-221.04 555.85,-221.04 555.85,-227.04 549.85,-233.04 543.85,-233.04"/>
<text text-anchor="start" x="345.56" y="-145.52" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#ffe0c2">Cognito</text>
<text text-anchor="start" x="235.27" y="-120.72" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#ffa057">Provides user management and authentication</text>
</g>
<!-- ui -->
<g id="node2" class="node">
<title>ui</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M318.05,-569.68C318.05,-569.68 12,-569.68 12,-569.68 6,-569.68 0,-563.68 0,-557.68 0,-557.68 0,-396.64 0,-396.64 0,-390.64 6,-384.64 12,-384.64 12,-384.64 318.05,-384.64 318.05,-384.64 324.05,-384.64 330.05,-390.64 330.05,-396.64 330.05,-396.64 330.05,-557.68 330.05,-557.68 330.05,-563.68 324.05,-569.68 318.05,-569.68"/>
<text text-anchor="start" x="125" y="-491.16" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Frontend</text>
<text text-anchor="start" x="40.89" y="-466.36" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">All the frontend applications of the cloud</text>
<text text-anchor="start" x="142.86" y="-448.36" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">system</text>
</g>
<!-- backend -->
<g id="node3" class="node">
<title>backend</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M748.05,-569.68C748.05,-569.68 442,-569.68 442,-569.68 436,-569.68 430,-563.68 430,-557.68 430,-557.68 430,-396.64 430,-396.64 430,-390.64 436,-384.64 442,-384.64 442,-384.64 748.05,-384.64 748.05,-384.64 754.05,-384.64 760.05,-390.64 760.05,-396.64 760.05,-396.64 760.05,-557.68 760.05,-557.68 760.05,-563.68 754.05,-569.68 748.05,-569.68"/>
<text text-anchor="start" x="556.11" y="-482.16" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Backend</text>
<text text-anchor="start" x="464.68" y="-457.36" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">The backend services of the cloud system</text>
</g>
<!-- ui&#45;&gt;cognito -->
<g id="edge1" class="edge">
<title>ui&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M223.77,-384.72C251.8,-341.1 285.43,-288.75 314.31,-243.81"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="317.25,-245.7 319.71,-235.4 311.36,-241.92 317.25,-245.7"/>
<text text-anchor="start" x="282.02" y="-312.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">authenticates</text>
</g>
<!-- backend&#45;&gt;cognito -->
<g id="edge2" class="edge">
<title>backend&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M536.27,-384.72C508.25,-341.1 474.61,-288.75 445.74,-243.81"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="448.69,-241.92 440.34,-235.4 442.8,-245.7 448.69,-241.92"/>
<text text-anchor="start" x="510.02" y="-312.54" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">authorizes</text>
</g>
</g>
</svg>
`;case"cloud_backend":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1468pt" height="1059pt"
 viewBox="0.00 0.00 1468.02 1058.64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 1048.63)">
<g id="clust1" class="cluster">
<title>cluster_backend</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="606,-476.94 606,-765.58 1016,-765.58 1016,-476.94 606,-476.94"/>
<text text-anchor="start" x="614" y="-750.88" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#c2f0c2" fill-opacity="0.701961">BACKEND</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_aws</title>
<polygon fill="#51321f" stroke="#3f2717" points="8,-8 8,-428.94 1440,-428.94 1440,-8 8,-8"/>
<text text-anchor="start" x="16" y="-414.24" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#ffa057" fill-opacity="0.701961">AMAZON WEB SERVICES</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_pg</title>
<polygon fill="#5a3620" stroke="#462a17" points="48,-48 48,-365.34 988,-365.34 988,-48 48,-48"/>
<text text-anchor="start" x="56" y="-350.64" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#ffa057" fill-opacity="0.701961">POSTGRESQL</text>
</g>
<!-- graphql -->
<g id="node1" class="node">
<title>graphql</title>
<path fill="#428a4f" stroke="#2563eb" stroke-width="0" d="M964.02,-701.98C964.02,-701.98 657.98,-701.98 657.98,-701.98 651.98,-701.98 645.98,-695.98 645.98,-689.98 645.98,-689.98 645.98,-528.94 645.98,-528.94 645.98,-522.94 651.98,-516.94 657.98,-516.94 657.98,-516.94 964.02,-516.94 964.02,-516.94 970.02,-516.94 976.02,-522.94 976.02,-528.94 976.02,-528.94 976.02,-689.98 976.02,-689.98 976.02,-695.98 970.02,-701.98 964.02,-701.98"/>
<text text-anchor="start" x="750.97" y="-614.46" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">GraphQL API</text>
<text text-anchor="start" x="692.72" y="-589.66" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">The GraphQL API of the cloud system</text>
</g>
<!-- tbl_sessions -->
<g id="node2" class="node">
<title>tbl_sessions</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M418.02,-282.31C418.02,-293.03 344.06,-301.74 253,-301.74 161.94,-301.74 87.98,-293.03 87.98,-282.31 87.98,-282.31 87.98,-107.43 87.98,-107.43 87.98,-96.71 161.94,-88 253,-88 344.06,-88 418.02,-96.71 418.02,-107.43 418.02,-107.43 418.02,-282.31 418.02,-282.31"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M418.02,-282.31C418.02,-271.59 344.06,-262.88 253,-262.88 161.94,-262.88 87.98,-271.59 87.98,-282.31"/>
<text text-anchor="start" x="202.98" y="-218.57" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#ffe0c2">[ sessions ]</text>
<text text-anchor="start" x="194.97" y="-196.77" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#ffa057">&lt;&lt; private schema &gt;&gt;</text>
<text text-anchor="start" x="196.98" y="-174.37" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#ffa057">Active sessions of</text>
<text text-anchor="start" x="176.73" y="-156.37" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#ffa057">authenticated customers</text>
</g>
<!-- tbl_customers -->
<g id="node3" class="node">
<title>tbl_customers</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M948.02,-270.57C948.02,-279.85 874.06,-287.39 783,-287.39 691.94,-287.39 617.98,-279.85 617.98,-270.57 617.98,-270.57 617.98,-119.17 617.98,-119.17 617.98,-109.89 691.94,-102.35 783,-102.35 874.06,-102.35 948.02,-109.89 948.02,-119.17 948.02,-119.17 948.02,-270.57 948.02,-270.57"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M948.02,-270.57C948.02,-261.29 874.06,-253.75 783,-253.75 691.94,-253.75 617.98,-261.29 617.98,-270.57"/>
<text text-anchor="start" x="725.76" y="-198.07" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#ffe0c2">[ customers ]</text>
<text text-anchor="start" x="724.97" y="-176.27" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#ffa057">&lt;&lt; private schema &gt;&gt;</text>
</g>
<!-- cognito -->
<g id="node4" class="node">
<title>cognito</title>
<path fill="#a35829" stroke="#2563eb" stroke-width="0" d="M1387.82,-287.39C1387.82,-287.39 1060.18,-287.39 1060.18,-287.39 1054.18,-287.39 1048.18,-281.39 1048.18,-275.39 1048.18,-275.39 1048.18,-114.35 1048.18,-114.35 1048.18,-108.35 1054.18,-102.35 1060.18,-102.35 1060.18,-102.35 1387.82,-102.35 1387.82,-102.35 1393.82,-102.35 1399.82,-108.35 1399.82,-114.35 1399.82,-114.35 1399.82,-275.39 1399.82,-275.39 1399.82,-281.39 1393.82,-287.39 1387.82,-287.39"/>
<text text-anchor="start" x="1189.53" y="-199.87" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#ffe0c2">Cognito</text>
<text text-anchor="start" x="1079.24" y="-175.07" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#ffa057">Provides user management and authentication</text>
</g>
<!-- ui -->
<g id="node5" class="node">
<title>ui</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M1165.02,-1038.62C1165.02,-1038.62 858.98,-1038.62 858.98,-1038.62 852.98,-1038.62 846.98,-1032.62 846.98,-1026.62 846.98,-1026.62 846.98,-865.58 846.98,-865.58 846.98,-859.58 852.98,-853.58 858.98,-853.58 858.98,-853.58 1165.02,-853.58 1165.02,-853.58 1171.02,-853.58 1177.02,-859.58 1177.02,-865.58 1177.02,-865.58 1177.02,-1026.62 1177.02,-1026.62 1177.02,-1032.62 1171.02,-1038.62 1165.02,-1038.62"/>
<text text-anchor="start" x="971.98" y="-960.1" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Frontend</text>
<text text-anchor="start" x="887.86" y="-935.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">All the frontend applications of the cloud</text>
<text text-anchor="start" x="989.83" y="-917.3" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">system</text>
</g>
<!-- graphql&#45;&gt;tbl_sessions -->
<g id="edge5" class="edge">
<title>graphql&#45;&gt;tbl_sessions</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M687.37,-517.15C649.1,-488.88 606.8,-457.63 568,-428.94 513.14,-388.38 452.92,-343.83 399.96,-304.64"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="402.37,-302.07 392.25,-298.94 398.21,-307.7 402.37,-302.07"/>
<text text-anchor="start" x="617" y="-444.84" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- graphql&#45;&gt;tbl_customers -->
<g id="edge6" class="edge">
<title>graphql&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M804.8,-517.15C800.47,-453.26 794.67,-367.76 790.14,-301.02"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="793.65,-301.12 789.48,-291.38 786.67,-301.6 793.65,-301.12"/>
<text text-anchor="start" x="810" y="-444.84" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- graphql&#45;&gt;cognito -->
<g id="edge4" class="edge">
<title>graphql&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M918.08,-517.16C949.32,-489.5 983.09,-458.58 1013,-428.94 1055.18,-387.15 1099.6,-338.8 1136.76,-297"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1139.28,-299.43 1143.3,-289.62 1134.04,-294.78 1139.28,-299.43"/>
<text text-anchor="start" x="1012" y="-444.84" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">authorizes</text>
</g>
<!-- tbl_sessions&#45;&gt;tbl_customers -->
<g id="edge1" class="edge">
<title>tbl_sessions&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" d="M418.88,-194.87C477.84,-194.87 544.46,-194.87 604.44,-194.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="604.11,-198.37 614.11,-194.87 604.11,-191.37 604.11,-198.37"/>
<text text-anchor="start" x="483.06" y="-205.77" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">references to</text>
</g>
<!-- ui&#45;&gt;graphql -->
<g id="edge2" class="edge">
<title>ui&#45;&gt;graphql</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M957.08,-853.66C930.87,-810.04 899.43,-757.69 872.44,-712.75"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="875.57,-711.16 867.42,-704.39 869.57,-714.76 875.57,-711.16"/>
<text text-anchor="start" x="933" y="-781.48" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- ui&#45;&gt;cognito -->
<g id="edge3" class="edge">
<title>ui&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1037.89,-853.61C1077.56,-713.4 1153.15,-446.25 1194.75,-299.24"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1198,-300.62 1197.35,-290.04 1191.26,-298.71 1198,-300.62"/>
<text text-anchor="start" x="1152" y="-604.86" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">authenticates</text>
</g>
</g>
</svg>
`;case"aws_pg":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="976pt" height="690pt"
 viewBox="0.00 0.00 976.02 690.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 679.99)">
<g id="clust1" class="cluster">
<title>cluster_cloud</title>
<polygon fill="#3e4651" stroke="#2d333d" points="315,-373.34 315,-661.98 725,-661.98 725,-373.34 315,-373.34"/>
<text text-anchor="start" x="323" y="-647.28" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">CLOUD SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_pg</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-8 8,-325.34 948,-325.34 948,-8 8,-8"/>
<text text-anchor="start" x="16" y="-310.64" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#cbd5e1" fill-opacity="0.701961">AWS &#45; POSTGRESQL</text>
</g>
<!-- backend -->
<g id="node1" class="node">
<title>backend</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M673.02,-598.38C673.02,-598.38 366.98,-598.38 366.98,-598.38 360.98,-598.38 354.98,-592.38 354.98,-586.38 354.98,-586.38 354.98,-425.34 354.98,-425.34 354.98,-419.34 360.98,-413.34 366.98,-413.34 366.98,-413.34 673.02,-413.34 673.02,-413.34 679.02,-413.34 685.02,-419.34 685.02,-425.34 685.02,-425.34 685.02,-586.38 685.02,-586.38 685.02,-592.38 679.02,-598.38 673.02,-598.38"/>
<text text-anchor="start" x="481.08" y="-510.86" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Backend</text>
<text text-anchor="start" x="389.66" y="-486.06" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">The backend services of the cloud system</text>
</g>
<!-- tbl_sessions -->
<g id="node2" class="node">
<title>tbl_sessions</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M378.02,-242.31C378.02,-253.03 304.06,-261.74 213,-261.74 121.94,-261.74 47.98,-253.03 47.98,-242.31 47.98,-242.31 47.98,-67.43 47.98,-67.43 47.98,-56.71 121.94,-48 213,-48 304.06,-48 378.02,-56.71 378.02,-67.43 378.02,-67.43 378.02,-242.31 378.02,-242.31"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M378.02,-242.31C378.02,-231.59 304.06,-222.88 213,-222.88 121.94,-222.88 47.98,-231.59 47.98,-242.31"/>
<text text-anchor="start" x="162.98" y="-178.57" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">[ sessions ]</text>
<text text-anchor="start" x="154.97" y="-156.77" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">&lt;&lt; private schema &gt;&gt;</text>
<text text-anchor="start" x="156.98" y="-134.37" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Active sessions of</text>
<text text-anchor="start" x="136.73" y="-116.37" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">authenticated customers</text>
</g>
<!-- tbl_customers -->
<g id="node3" class="node">
<title>tbl_customers</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M908.02,-230.57C908.02,-239.85 834.06,-247.39 743,-247.39 651.94,-247.39 577.98,-239.85 577.98,-230.57 577.98,-230.57 577.98,-79.17 577.98,-79.17 577.98,-69.89 651.94,-62.35 743,-62.35 834.06,-62.35 908.02,-69.89 908.02,-79.17 908.02,-79.17 908.02,-230.57 908.02,-230.57"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M908.02,-230.57C908.02,-221.29 834.06,-213.75 743,-213.75 651.94,-213.75 577.98,-221.29 577.98,-230.57"/>
<text text-anchor="start" x="685.76" y="-158.07" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">[ customers ]</text>
<text text-anchor="start" x="684.97" y="-136.27" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">&lt;&lt; private schema &gt;&gt;</text>
</g>
<!-- backend&#45;&gt;tbl_sessions -->
<g id="edge2" class="edge">
<title>backend&#45;&gt;tbl_sessions</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M439.74,-413.62C401.68,-370.35 355.76,-318.16 315.23,-272.09"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="317.9,-269.82 308.67,-264.63 312.65,-274.45 317.9,-269.82"/>
<text text-anchor="start" x="394" y="-341.24" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- backend&#45;&gt;tbl_customers -->
<g id="edge3" class="edge">
<title>backend&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M578.3,-413.62C608.59,-366.21 645.73,-308.1 677.07,-259.05"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="680.01,-260.95 682.44,-250.64 674.11,-257.18 680.01,-260.95"/>
<text text-anchor="start" x="634" y="-341.24" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">reads/writes</text>
</g>
<!-- tbl_sessions&#45;&gt;tbl_customers -->
<g id="edge1" class="edge">
<title>tbl_sessions&#45;&gt;tbl_customers</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" d="M378.88,-154.87C437.84,-154.87 504.46,-154.87 564.44,-154.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="564.11,-158.37 574.11,-154.87 564.11,-151.37 564.11,-158.37"/>
<text text-anchor="start" x="443.06" y="-165.77" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">references to</text>
</g>
</g>
</svg>
`;case"cloud_ui":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 11.0.0 (0)
 -->
<!-- Pages: 1 -->
<svg width="1048pt" height="1312pt"
 viewBox="0.00 0.00 1048.02 1312.20" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(10.01 1302.19)">
<g id="clust1" class="cluster">
<title>cluster_ui</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="180,-730.51 180,-1019.15 1020,-1019.15 1020,-730.51 180,-730.51"/>
<text text-anchor="start" x="188" y="-1004.45" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#c2f0c2" fill-opacity="0.701961">FRONTEND</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_aws</title>
<polygon fill="#5a3620" stroke="#462a17" points="8,-8 8,-362.47 870,-362.47 870,-8 8,-8"/>
<text text-anchor="start" x="16" y="-347.77" font-family="Helvetica,sans-Serif" font-weight="bold" font-size="13.00" fill="#ffa057" fill-opacity="0.701961">AMAZON WEB SERVICES</text>
</g>
<!-- dashboard -->
<g id="node1" class="node">
<title>dashboard</title>
<path fill="#428a4f" stroke="#2563eb" stroke-width="0" d="M538.02,-955.55C538.02,-955.55 231.98,-955.55 231.98,-955.55 225.98,-955.55 219.98,-949.55 219.98,-943.55 219.98,-943.55 219.98,-782.51 219.98,-782.51 219.98,-776.51 225.98,-770.51 231.98,-770.51 231.98,-770.51 538.02,-770.51 538.02,-770.51 544.02,-770.51 550.02,-776.51 550.02,-782.51 550.02,-782.51 550.02,-943.55 550.02,-943.55 550.02,-949.55 544.02,-955.55 538.02,-955.55"/>
<text text-anchor="start" x="289.96" y="-886.73" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Customer Dashboard</text>
<text text-anchor="start" x="365.66" y="-864.93" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">NextJS</text>
<text text-anchor="start" x="256.22" y="-842.53" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">Web application, that allows customers to</text>
<text text-anchor="start" x="293.18" y="-824.53" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">interact with the cloud system</text>
</g>
<!-- mobile -->
<g id="node2" class="node">
<title>mobile</title>
<path fill="#428a4f" stroke="#2563eb" stroke-width="0" d="M968.02,-955.55C968.02,-955.55 661.98,-955.55 661.98,-955.55 655.98,-955.55 649.98,-949.55 649.98,-943.55 649.98,-943.55 649.98,-782.51 649.98,-782.51 649.98,-776.51 655.98,-770.51 661.98,-770.51 661.98,-770.51 968.02,-770.51 968.02,-770.51 974.02,-770.51 980.02,-776.51 980.02,-782.51 980.02,-782.51 980.02,-943.55 980.02,-943.55 980.02,-949.55 974.02,-955.55 968.02,-955.55"/>
<text text-anchor="start" x="764.97" y="-877.73" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f8fafc">Mobile App</text>
<text text-anchor="start" x="798" y="-855.93" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#c2f0c2">Flutter</text>
<text text-anchor="start" x="704.5" y="-833.53" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#c2f0c2">The mobile app of the cloud system</text>
</g>
<!-- pg -->
<g id="node3" class="node">
<title>pg</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M378.02,-276.06C378.02,-288.64 304.06,-298.87 213,-298.87 121.94,-298.87 47.98,-288.64 47.98,-276.06 47.98,-276.06 47.98,-70.81 47.98,-70.81 47.98,-58.22 121.94,-48 213,-48 304.06,-48 378.02,-58.22 378.02,-70.81 378.02,-70.81 378.02,-276.06 378.02,-276.06"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M378.02,-276.06C378.02,-263.48 304.06,-253.25 213,-253.25 121.94,-253.25 47.98,-263.48 47.98,-276.06"/>
<polygon fill="none" stroke="none" points="193,-189.63 193,-229.63 233,-229.63 233,-189.63 193,-189.63"/>
<text text-anchor="start" x="193" y="-211.63" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#eff6ff"> </text>
<text text-anchor="start" x="158.53" y="-165.63" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#ffe0c2">PostgreSQL</text>
<text text-anchor="start" x="145.31" y="-143.83" font-family="Helvetica,sans-Serif" font-size="12.00" fill="#ffa057">AWS Aurora PostgreSQL</text>
<text text-anchor="start" x="104.05" y="-121.43" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#ffa057">Database for storing relational data</text>
</g>
<!-- cognito -->
<g id="node4" class="node">
<title>cognito</title>
<path fill="#a35829" stroke="#2563eb" stroke-width="0" d="M817.82,-265.95C817.82,-265.95 490.18,-265.95 490.18,-265.95 484.18,-265.95 478.18,-259.95 478.18,-253.95 478.18,-253.95 478.18,-92.91 478.18,-92.91 478.18,-86.91 484.18,-80.91 490.18,-80.91 490.18,-80.91 817.82,-80.91 817.82,-80.91 823.82,-80.91 829.82,-86.91 829.82,-92.91 829.82,-92.91 829.82,-253.95 829.82,-253.95 829.82,-259.95 823.82,-265.95 817.82,-265.95"/>
<text text-anchor="start" x="619.53" y="-178.43" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#ffe0c2">Cognito</text>
<text text-anchor="start" x="509.24" y="-153.63" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#ffa057">Provides user management and authentication</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M753.02,-1292.19C753.02,-1292.19 446.98,-1292.19 446.98,-1292.19 440.98,-1292.19 434.98,-1286.19 434.98,-1280.19 434.98,-1280.19 434.98,-1119.15 434.98,-1119.15 434.98,-1113.15 440.98,-1107.15 446.98,-1107.15 446.98,-1107.15 753.02,-1107.15 753.02,-1107.15 759.02,-1107.15 765.02,-1113.15 765.02,-1119.15 765.02,-1119.15 765.02,-1280.19 765.02,-1280.19 765.02,-1286.19 759.02,-1292.19 753.02,-1292.19"/>
<text text-anchor="start" x="556.66" y="-1204.67" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Customer</text>
<text text-anchor="start" x="507.41" y="-1179.87" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">Customer of the cloud system</text>
</g>
<!-- backend -->
<g id="node6" class="node">
<title>backend</title>
<path fill="#0284c7" stroke="#2563eb" stroke-width="0" d="M366.02,-635.51C366.02,-635.51 59.98,-635.51 59.98,-635.51 53.98,-635.51 47.98,-629.51 47.98,-623.51 47.98,-623.51 47.98,-462.47 47.98,-462.47 47.98,-456.47 53.98,-450.47 59.98,-450.47 59.98,-450.47 366.02,-450.47 366.02,-450.47 372.02,-450.47 378.02,-456.47 378.02,-462.47 378.02,-462.47 378.02,-623.51 378.02,-623.51 378.02,-629.51 372.02,-635.51 366.02,-635.51"/>
<text text-anchor="start" x="174.08" y="-547.99" font-family="Helvetica,sans-Serif" font-size="20.00" fill="#f0f9ff">Backend</text>
<text text-anchor="start" x="82.66" y="-523.19" font-family="Helvetica,sans-Serif" font-size="14.00" fill="#b6ecf7">The backend services of the cloud system</text>
</g>
<!-- dashboard&#45;&gt;cognito -->
<g id="edge5" class="edge">
<title>dashboard&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M420.72,-770.72C470.7,-642.97 561.23,-411.57 613.6,-277.69"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="616.75,-279.25 617.14,-268.66 610.23,-276.7 616.75,-279.25"/>
<text text-anchor="start" x="551" y="-538.39" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">authenticates</text>
</g>
<!-- dashboard&#45;&gt;backend -->
<g id="edge4" class="edge">
<title>dashboard&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M335.71,-770.89C314.75,-732.13 290.21,-686.75 268.6,-646.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="271.72,-645.21 263.88,-638.07 265.56,-648.54 271.72,-645.21"/>
<text text-anchor="start" x="314" y="-698.41" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- mobile&#45;&gt;cognito -->
<g id="edge7" class="edge">
<title>mobile&#45;&gt;cognito</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M793.62,-770.72C763.77,-643.23 709.74,-412.5 678.37,-278.5"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="681.78,-277.73 676.09,-268.79 674.97,-279.33 681.78,-277.73"/>
<text text-anchor="start" x="770" y="-538.39" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">authenticates</text>
</g>
<!-- mobile&#45;&gt;backend -->
<g id="edge6" class="edge">
<title>mobile&#45;&gt;backend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M669.85,-770.54C646.71,-756.74 622.86,-742.97 600,-730.51 532.21,-693.56 455.97,-655.99 389.2,-624.35"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="390.98,-621.32 380.44,-620.22 387.99,-627.65 390.98,-621.32"/>
<text text-anchor="start" x="579" y="-698.41" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">fetches data</text>
</g>
<!-- customer&#45;&gt;dashboard -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;dashboard</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M541.25,-1107.22C513.22,-1063.6 479.59,-1011.25 450.72,-966.31"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="453.66,-964.43 445.31,-957.9 447.78,-968.21 453.66,-964.43"/>
<text text-anchor="start" x="515" y="-1035.05" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">opens in browser</text>
</g>
<!-- customer&#45;&gt;mobile -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;mobile</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M658.75,-1107.22C686.78,-1063.6 720.41,-1011.25 749.28,-966.31"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="752.22,-968.21 754.69,-957.9 746.34,-964.43 752.22,-968.21"/>
<text text-anchor="start" x="717" y="-1035.05" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">opens on mobile device</text>
</g>
<!-- backend&#45;&gt;pg -->
<g id="edge3" class="edge">
<title>backend&#45;&gt;pg</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M213,-450.66C213,-408.97 213,-358.71 213,-312.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="216.5,-312.67 213,-302.67 209.5,-312.67 216.5,-312.67"/>
<text text-anchor="start" x="223" y="-378.37" font-family="Helvetica,sans-Serif" font-size="13.00" fill="#c6c6c6">reads/writes</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}export{t as dotSource,n as svgSource};
